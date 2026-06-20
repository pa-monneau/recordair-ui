import type { AnchorHTMLAttributes, ReactNode } from "react";
import { buttonClassName } from "./buttonStyles";
import type { ButtonShape, ButtonSize, ButtonVariant } from "./buttonStyles";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  block?: boolean;
};

const LinkButton = ({
  variant = "primary",
  size = "md",
  shape = "default",
  leadingIcon,
  trailingIcon,
  block = false,
  className,
  children,
  ...rest
}: LinkButtonProps) => (
  <a
    className={buttonClassName({ variant, size, shape, block, className })}
    {...rest}
  >
    {leadingIcon}
    {children}
    {trailingIcon}
  </a>
);

export { LinkButton };
export type { LinkButtonProps };
