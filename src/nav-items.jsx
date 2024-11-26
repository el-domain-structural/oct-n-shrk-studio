import { HomeIcon, InfoIcon, ContactIcon, BookKeyIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Bio from "./pages/Bio.jsx";
import Contact from "./pages/Contact.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Agenda",
    to: "/performing",
    icon: <BookKeyIcon className="h-4 w-4" />,
    page: <Performing />,
  },
  {
    title: "Bio",
    to: "/bio",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <Bio />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <ContactIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];