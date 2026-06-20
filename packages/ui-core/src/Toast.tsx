"use client";

import { useEffect } from "react";
import { XIcon } from "./icons";
import { classNames } from "./classNames";

type ToastVariant = "success" | "error" | "warning" | "info";

type ToastProps = {
  open: boolean;
  variant: ToastVariant;
  message: string;
  closeLabel: string;
  onClose: () => void;
  duration?: number;
};

const variantClasses: Record<ToastVariant, string> = {
  success: "border-success-border bg-success-bg text-success-text",
  error: "border-error-border bg-error-bg text-error-text",
  warning: "border-warning-border bg-warning-bg text-warning-text",
  info: "border-info-border bg-info-bg text-info-text",
};

const Toast = ({
  open,
  variant,
  message,
  closeLabel,
  onClose,
  duration = 3500,
}: ToastProps) => {
  useEffect(() => {
    if (!open || duration === 0) {
      return;
    }

    const timeout = window.setTimeout(onClose, duration);

    return () => window.clearTimeout(timeout);
  }, [open, duration, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        className={classNames(
          "flex items-center gap-3 rounded-md border px-4 py-3 text-sm shadow-md",
          variantClasses[variant],
        )}
      >
        <span>{message}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="text-current opacity-60 transition-opacity hover:opacity-100"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

export { Toast };
export type { ToastProps, ToastVariant };
