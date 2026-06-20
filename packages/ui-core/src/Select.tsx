import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { ChevronDownIcon } from "./icons";
import { classNames } from "./classNames";

type SelectProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  options?: readonly string[];
};

const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(
  { invalid = false, className, options, list, id, ...rest },
  ref,
) {
  const listId = list ?? (options && id ? `${id}-options` : undefined);

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        id={id}
        list={listId}
        aria-invalid={invalid || undefined}
        className={classNames(
          "h-[var(--size-btn-md)] w-full rounded-md border-control bg-neutral-0 px-4 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400",
          "focus:outline-none focus:shadow-focus",
          "disabled:bg-neutral-100 disabled:text-neutral-400",
          invalid
            ? "border-error focus:border-error"
            : "border-neutral-200 focus:border-brand-primary",
          className,
        )}
        {...rest}
      />
      <ChevronDownIcon
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
      />
      {options && listId ? (
        <datalist id={listId}>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      ) : null}
    </div>
  );
});

export { Select };
export type { SelectProps };
