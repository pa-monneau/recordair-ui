import type { Preview } from "@storybook/react-vite";
import "../stories/storybook.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        type: "dynamic",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "error",
    },
    backgrounds: {
      default: "page",
      values: [
        { name: "page", value: "#fafafa" },
        { name: "white", value: "#ffffff" },
        { name: "inverted", value: "#0f0f1a" },
      ],
    },
  },
};

export default preview;
