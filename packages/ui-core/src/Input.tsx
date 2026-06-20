import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { classNames } from "./classNames";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid = false, leadingIcon, trailingIcon, className, ...rest },
  ref,
) {
  const input = (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={classNames(
        "h-[var(--size-btn-md)] w-full rounded-md border-control bg-neutral-0 px-4 text-sm text-neutral-900 placeholder:text-neutral-400",
        "focus:outline-none focus:ring-2 focus:ring-brand-primary/40",
        "disabled:bg-neutral-100 disabled:text-neutral-400",
        Boolean(leadingIcon) && "pl-11",
        Boolean(trailingIcon) && "pr-11",
        invalid
          ? "border-error focus:border-error"
          : "border-neutral-200 focus:border-brand-primary",
        className,
      )}
      {...rest}
    />
  );

  if (!leadingIcon && !trailingIcon) {
    return input;
  }

  return (
    <span className="relative block w-full">
      {leadingIcon ? (
        <span className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-neutral-400">
          {leadingIcon}
        </span>
      ) : null}
      {input}
      {trailingIcon ? (
        <span className="absolute inset-y-0 right-4 grid place-items-center text-neutral-500">
          {trailingIcon}
        </span>
      ) : null}
    </span>
  );
});

export { Input };
export type { InputProps };
