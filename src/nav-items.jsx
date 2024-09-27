import { HomeIcon, InfoIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Bio from "./pages/Bio.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Bio",
    to: "/bio",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <Bio />,
  },
];