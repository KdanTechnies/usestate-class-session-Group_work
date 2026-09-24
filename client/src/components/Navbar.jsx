import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./ui/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy" },
];

export default function Navbar({ brand }) {
     const [open, setOpen] = useState(false);
     const close = () => setOpen(false);

        return (

        )






}