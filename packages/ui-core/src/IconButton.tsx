import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";
import type { ButtonSize, ButtonVariant } from "./buttonStyles";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: ReactNode;
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "size-[var(--size-btn-sm)] p-0",
  md: "size-[var(--size-btn-md)] p-0",
  lg: "size-[var(--size-btn-lg)] p-0",
};

const IconButton = ({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className,
  ...rest
}: IconButtonProps) => (
  <Button
    aria-label={label}
    variant={variant}
    size={size}
    shape="pill"
    className={`${iconSizeClasses[size]} ${className ?? ""}`}
    {...rest}
  >
    {icon}
  </Button>
);

export { IconButton };
export type { IconButtonProps };
