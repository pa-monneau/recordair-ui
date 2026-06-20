import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
  IconBox,
} from "@recordair-ds/ui-core";
import { AudioLinesIcon, StarIcon } from "@recordair-ds/ui-core/icons";

const CardsDemo = () => (
  <div className="grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Card>
      <CardHeader>
        <CardTitle>Carte simple</CardTitle>
        <CardDescription>Contenu éditorial et actions libres.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-neutral-600">Une base neutre pour les panneaux et formulaires.</CardContent>
      <CardFooter><Button size="sm">Action</Button></CardFooter>
    </Card>
    <Card variant="elevated">
      <CardHeader layout="row" className="items-center justify-start gap-3">
        <IconBox tone="brand" icon={<AudioLinesIcon />} />
        <div><CardTitle>Carte élevée</CardTitle><CardDescription>Accent visuel modéré.</CardDescription></div>
      </CardHeader>
      <CardContent className="flex gap-2"><Badge tone="success" dot>Disponible</Badge><Badge>Studio</Badge></CardContent>
    </Card>
    <Card variant="interactive" padding="none">
      <CardMedia className="bg-gradient-to-br from-role-studio-from to-role-studio-to" />
      <CardContent className="gap-3 p-5">
        <div className="flex items-center justify-between"><CardTitle>Studio République</CardTitle><span className="flex items-center gap-1 text-label"><StarIcon className="size-4 fill-star text-star" />4,9</span></div>
        <CardDescription>Lille, France</CardDescription>
        <div className="flex items-center gap-2"><Avatar name="Alex Martin" size="sm" /><span className="text-label text-neutral-600">Hôte vérifié</span></div>
      </CardContent>
    </Card>
  </div>
);

const meta = {
  title: "Core/Cards",
  component: CardsDemo,
  parameters: { layout: "padded" },
} satisfies Meta<typeof CardsDemo>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {};

export default meta;
export { Catalog };
