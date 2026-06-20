import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Badge, IconBox } from "@recordair-ds/ui-core";
import { AudioLinesIcon } from "@recordair-ds/ui-core/icons";

const IdentityCatalog = () => (
  <div className="flex flex-wrap items-center gap-6">
    <Avatar name="Camille Dupont" />
    <Badge tone="success" dot>Vérifié</Badge>
    <IconBox tone="brand" icon={<AudioLinesIcon />} />
  </div>
);

const meta = {
  title: "Core/Identity",
  component: IdentityCatalog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof IdentityCatalog>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {};
const AvatarStory: Story = { name: "Avatar", render: () => <Avatar name="Camille Dupont" size="lg" /> };
const BadgeStory: Story = { name: "Badge", render: () => <Badge tone="success" dot>Disponible</Badge> };
const IconBoxStory: Story = { name: "IconBox", render: () => <IconBox tone="brand" icon={<AudioLinesIcon />} /> };

export default meta;
export { AvatarStory, BadgeStory, Catalog, IconBoxStory };
