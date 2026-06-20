import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { classNames } from "./classNames";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid = false, className, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={classNames(
        "min-h-28 w-full resize-y rounded-md border-control bg-neutral-0 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400",
        "focus:outline-none focus:shadow-focus",
        "disabled:bg-neutral-100 disabled:text-neutral-400",
        invalid ? "border-error focus:border-error" : "border-neutral-200 focus:border-brand-primary",
        className,
      )}
      {...rest}
    />
  );
});

export { Textarea };
export type { TextareaProps };
