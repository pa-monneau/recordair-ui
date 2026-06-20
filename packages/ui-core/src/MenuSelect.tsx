"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";
import { classNames } from "./classNames";

type MenuSelectOption = {
  id: string;
  label: string;
  disabled?: boolean;
};

type MenuSelectProps = {
  label: string;
  options: readonly MenuSelectOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  className?: string;
};

const MenuSelect = ({ label, options, selectedId, onSelect, className }: MenuSelectProps) => {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointer = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const select = (id: string) => {
    onSelect(id);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={classNames("relative inline-flex", className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        className="flex h-[var(--size-btn-sm)] items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-0 px-4 text-label font-medium text-neutral-700 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:shadow-focus"
      >
        {label}
        <ChevronDownIcon aria-hidden className={classNames("size-4 text-neutral-500 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-20 mt-1 flex w-[var(--size-mobile-menu)] flex-col rounded-lg border border-neutral-200 bg-neutral-0 p-1 shadow-elevated"
        >
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={option.id === selectedId}
              disabled={option.disabled}
              onClick={() => select(option.id)}
              className={classNames(
                "rounded-md px-3 py-2 text-left text-label transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-50",
                option.id === selectedId ? "font-semibold text-neutral-900" : "text-neutral-700",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export { MenuSelect };
export type { MenuSelectOption, MenuSelectProps };
