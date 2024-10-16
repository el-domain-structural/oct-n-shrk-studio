import React, { useRef, useEffect } from 'react';

const vertexShaderSource = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    vec3 color = vec3(0.0);
    float d = 0.0;

    st = st * 2.0 - 1.0;

    for (int i = 0; i < 17; i++) {      
      d = length(abs(st) - sin(uTime * 0.003) * 0.5);
      d = sin(d / 6.0 + (uTime * 0.007)) / 7.0;
      d = cos(d * 8.0 + (uTime * 0.007)) / 8.0;
      d = abs(d);
      d = pow(0.01 / d, 1.2);
      
      color += vec3(d * 0.3, d * 0.2, d * 1.0);
      st *= 1.8;
      st = fract(st);
      d = tan(d * 8.0 + (uTime * 0.007)) / 8.0;
      color += vec3(d * 0.3, d * 0.2, d * 1.0);
      st *= 1.7;
      st = fract(st);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

const ShaderCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, 1.0,
       1.0, -1.0,
       -1.0,  1.0,
       -1.0,  -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'aVertexPosition');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const timeUniformLocation = gl.getUniformLocation(program, 'uTime');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'uResolution');

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = (time) => {
      time *= 0.002; // Convert to seconds

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.uniform1f(timeUniformLocation, time);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-64 rounded-lg blur-sm" />;
};

export default ShaderCanvas;
