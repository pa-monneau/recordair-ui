import type { SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "./icons";
import { classNames } from "./classNames";

type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

const NativeSelect = ({
  invalid = false,
  className,
  children,
  ...rest
}: NativeSelectProps) => (
  <span className="relative block w-full">
    <select
      aria-invalid={invalid || undefined}
      className={classNames(
        "h-[var(--size-btn-md)] w-full appearance-none rounded-md border-control bg-neutral-0 px-4 pr-10 text-sm text-neutral-900",
        "focus:outline-none focus:shadow-focus",
        "disabled:bg-neutral-100 disabled:text-neutral-400",
        invalid
          ? "border-error focus:border-error"
          : "border-neutral-200 focus:border-brand-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
    <ChevronDownIcon
      aria-hidden
      className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
    />
  </span>
);

export { NativeSelect };
export type { NativeSelectProps };
