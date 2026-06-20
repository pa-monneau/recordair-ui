import type { ReactNode } from "react";
import { classNames } from "./classNames";

type NavigationListTone = "brand" | "inverted";

type NavigationListItem = {
  href: string;
  label: ReactNode;
  badge?: ReactNode;
  leadingIcon?: ReactNode;
  exact?: boolean;
};

type NavigationListProps = {
  items: readonly NavigationListItem[];
  activeHref?: string;
  label: string;
  tone?: NavigationListTone;
  className?: string;
};

const activeClasses: Record<NavigationListTone, string> = {
  brand: "bg-role-studio-bg text-role-studio-text",
  inverted: "bg-surface-inverted text-neutral-0",
};

const inactiveClasses: Record<NavigationListTone, string> = {
  brand: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
  inverted: "text-neutral-300 hover:bg-neutral-0/10 hover:text-neutral-0",
};

const NavigationList = ({
  items,
  activeHref,
  label,
  tone = "brand",
  className,
}: NavigationListProps) => (
  <nav aria-label={label} className={classNames("flex flex-col gap-1", className)}>
    {items.map((item) => {
      const target = item.href.split("#")[0]?.split("?")[0] || "/";
      const active = Boolean(
        activeHref
        && !item.href.includes("#")
        && (item.exact || target === "/"
          ? activeHref === target
          : activeHref === target || activeHref.startsWith(`${target}/`)),
      );

      return (
        <a
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={classNames(
            "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus",
            active
              ? activeClasses[tone]
              : inactiveClasses[tone],
          )}
        >
          {item.leadingIcon ? <span aria-hidden className="shrink-0">{item.leadingIcon}</span> : null}
          <span className="flex-1">{item.label}</span>
          {item.badge ? (
            <span className="grid min-w-[var(--size-nav-badge-min)] place-items-center rounded-full bg-error px-2 py-0.5 text-overline font-bold text-neutral-0">
              {item.badge}
            </span>
          ) : null}
        </a>
      );
    })}
  </nav>
);

export { NavigationList };
export type { NavigationListItem, NavigationListProps, NavigationListTone };
