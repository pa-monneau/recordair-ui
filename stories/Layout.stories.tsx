import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@recordair/ui-core";

const LayoutCatalog = () => (
  <div className="w-96 space-y-4">
    <span className="text-sm text-neutral-700">Section supérieure</span>
    <Divider />
    <span className="text-sm text-neutral-700">Section inférieure</span>
  </div>
);

const meta = {
  title: "Core/Layout",
  component: LayoutCatalog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LayoutCatalog>;

type Story = StoryObj<typeof meta>;

const DividerStory: Story = {
  name: "Divider",
  parameters: {
    docs: {
      source: {
        code: `import { Divider } from "@recordair/ui-core";

export const Section = () => (
  <div>
    <span>Section supérieure</span>
    <Divider />
    <span>Section inférieure</span>
  </div>
);`,
      },
    },
  },
};

export default meta;
export { DividerStory };
