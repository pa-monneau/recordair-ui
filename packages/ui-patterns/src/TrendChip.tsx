import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "@recordair-ds/ui-core/icons";
import { Badge } from "@recordair-ds/ui-core";

type TrendDirection = "up" | "down" | "neutral";

type TrendChipProps = {
  direction: TrendDirection;
  value: string;
  accessibleLabel?: string;
};

const tones: Record<TrendDirection, "success" | "error" | "neutral"> = {
  up: "success",
  down: "error",
  neutral: "neutral",
};

const directionIcons = {
  up: ArrowUpIcon,
  down: ArrowDownIcon,
  neutral: ArrowRightIcon,
};

const TrendChip = ({
  direction,
  value,
  accessibleLabel,
}: TrendChipProps) => {
  const Icon = directionIcons[direction];

  return (
    <Badge
      aria-label={accessibleLabel}
      tone={tones[direction]}
      icon={<Icon aria-hidden className="size-3" />}
    >
      {value}
    </Badge>
  );
};

export { TrendChip };
export type { TrendChipProps, TrendDirection };
