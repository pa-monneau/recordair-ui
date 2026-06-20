import type { HTMLAttributes } from "react";
import { classNames } from "./classNames";

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

const CardDescription = ({ className, ...rest }: CardDescriptionProps) => (
  <p className={classNames("text-label text-neutral-500", className)} {...rest} />
);

export { CardDescription };
export type { CardDescriptionProps };
