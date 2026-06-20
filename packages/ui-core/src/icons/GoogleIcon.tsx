import type { SVGProps } from "react";

type GoogleIconProps = SVGProps<SVGSVGElement>;

const GoogleIcon = (props: GoogleIconProps) => (
  <svg viewBox="0 0 20 20" aria-hidden {...props}>
    <path fill="#4285F4" d="M19.6 10.23c0-.71-.06-1.39-.18-2.05H10v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.34z" />
    <path fill="#34A853" d="M10 20c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.12H1.07v2.59A10 10 0 0 0 10 20z" />
    <path fill="#FBBC05" d="M4.4 11.91A6 6 0 0 1 4.08 10c0-.66.11-1.31.32-1.91V5.5H1.07A10 10 0 0 0 0 10c0 1.61.39 3.14 1.07 4.5l3.33-2.59z" />
    <path fill="#EA4335" d="M10 3.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87C14.96.98 12.7 0 10 0A10 10 0 0 0 1.07 5.5l3.33 2.59C5.19 5.72 7.4 3.96 10 3.96z" />
  </svg>
);

export { GoogleIcon };
export type { GoogleIconProps };
