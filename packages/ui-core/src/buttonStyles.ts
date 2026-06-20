import { classNames } from "./classNames";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "soft"
  | "danger"
  | "artist"
  | "studio"
  | "pro";
type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "default" | "pill";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  block?: boolean;
  className?: string;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[var(--size-btn-sm)] px-4 text-sm",
  md: "h-[var(--size-btn-md)] px-5 text-sm",
  lg: "h-[var(--size-btn-lg)] px-6 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to text-neutral-0 shadow-brand hover:brightness-110",
  secondary:
    "border-control border-neutral-200 bg-neutral-0 text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50",
  ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100",
  soft: "bg-role-studio-bg text-role-studio-text hover:brightness-95",
  danger: "bg-error text-neutral-0 hover:brightness-95",
  artist:
    "bg-gradient-to-r from-role-artist-from to-role-artist-to text-neutral-0 shadow-lg shadow-role-artist-to/30 hover:brightness-110",
  studio:
    "bg-gradient-to-r from-role-studio-from to-role-studio-to text-neutral-0 shadow-lg shadow-role-studio-from/30 hover:brightness-110",
  pro:
    "bg-gradient-to-r from-role-pro-from to-role-pro-to text-neutral-0 shadow-lg shadow-role-pro-from/30 hover:brightness-110",
};

const buttonClassName = ({
  variant = "primary",
  size = "md",
  shape = "default",
  block = false,
  className,
}: ButtonStyleOptions): string =>
  classNames(
    "inline-flex items-center justify-center gap-2 font-semibold transition focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-60",
    shape === "pill" ? "rounded-full" : "rounded-md",
    sizeClasses[size],
    variantClasses[variant],
    block && "w-full",
    className,
  );

export { buttonClassName };
export type { ButtonShape, ButtonSize, ButtonStyleOptions, ButtonVariant };
