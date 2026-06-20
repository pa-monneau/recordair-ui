import type { ComponentType } from "react";
import { Card, CardContent, CardTitle, IconBox, LinkButton } from "@recordair-ds/ui-core";
import { ArrowRightIcon, type IconProps } from "@recordair-ds/ui-core/icons";
import type { Role } from "./RoleBadge";

type RolePickerCardProps = {
  role: Role;
  href: string;
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
  bullets: readonly string[];
  cta: string;
};

const roleClasses: Record<
  Role,
  { iconTone: "artist" | "studio" | "pro"; cta: string; bullet: string }
> = {
  artist: {
    iconTone: "artist",
    cta: "from-role-artist-from to-role-artist-to",
    bullet: "bg-role-artist-bg",
  },
  studio: {
    iconTone: "studio",
    cta: "from-role-studio-from to-role-studio-to",
    bullet: "bg-role-studio-bg",
  },
  pro: {
    iconTone: "pro",
    cta: "from-role-pro-from to-role-pro-to",
    bullet: "bg-role-pro-bg",
  },
};

const RolePickerCard = ({
  role,
  href,
  Icon,
  title,
  description,
  bullets,
  cta,
}: RolePickerCardProps) => {
  const classes = roleClasses[role];

  return (
    <Card as="article" variant="elevated" padding="lg" className="min-h-[var(--size-role-card-min-height)] gap-6 rounded-xl">
      <IconBox tone={classes.iconTone} size="lg" icon={<Icon />} />
      <CardTitle level={2} className="text-heading-lg font-bold leading-tight tracking-tight">
        {title}
      </CardTitle>
      <p className="text-base leading-6 text-neutral-600">{description}</p>
      <ul className="flex flex-col gap-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-neutral-700">
            <span
              aria-hidden
              className={`mt-0.5 inline-block size-5 shrink-0 rounded-full ${classes.bullet}`}
            />
            {bullet}
          </li>
        ))}
      </ul>
      <CardContent className="flex-1" />
      <LinkButton
        href={href}
        size="lg"
        block
        trailingIcon={<ArrowRightIcon className="size-4" />}
        className={`bg-gradient-to-r ${classes.cta}`}
      >
        {cta}
      </LinkButton>
    </Card>
  );
};

export { RolePickerCard };
export type { RolePickerCardProps };
