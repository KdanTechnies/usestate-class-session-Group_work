import { Link } from "react-router-dom";
import "./Button.css";

// soogood take note of this documentaton
// variant: primary | secondary | outline | ghost | danger
// size: sm | md | lg — pass `to` to render a router Link instead of a <button>
export default function Button({
  children, variant = "primary", size = "md", to, type = "button",
  disabled = false, fullWidth = false, onClick,
}) {
  const className = `btn btn-${variant} btn-${size}${fullWidth ? " btn-full" : ""}`;
  if (to) return <Link to={to} className={className}>{children}</Link>;
  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export const PrimaryButton = (p) => <Button {...p} variant="primary" />;
export const SecondaryButton = (p) => <Button {...p} variant="secondary" />;
export const OutlineButton = (p) => <Button {...p} variant="outline" />;
export const GhostButton = (p) => <Button {...p} variant="ghost" />;
export const DangerButton = (p) => <Button {...p} variant="danger" />;
