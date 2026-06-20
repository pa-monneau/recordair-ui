import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonGroup, IconButton, LinkButton, SubmitButton } from "@recordair-ds/ui-core";
import { ArrowRightIcon, HeartIcon, SaveIcon } from "@recordair-ds/ui-core/icons";

const ButtonCatalog = () => (
  <div className="flex max-w-2xl flex-col gap-6">
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primaire</Button>
      <Button variant="secondary">Secondaire</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" leadingIcon={<SaveIcon className="size-4" />}>Petit</Button>
      <Button trailingIcon={<ArrowRightIcon className="size-4" />}>Moyen</Button>
      <Button size="lg" shape="pill">Grand pill</Button>
      <IconButton label="Ajouter aux favoris" icon={<HeartIcon className="size-4" />} variant="secondary" />
      <LinkButton href="#" variant="soft" trailingIcon={<ArrowRightIcon className="size-4" />}>Lien bouton</LinkButton>
    </div>
    <ButtonGroup aria-label="Actions de réservation">
      <Button variant="secondary">Refuser</Button>
      <Button>Accepter</Button>
    </ButtonGroup>
  </div>
);

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Continuer",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Primary: Story = {};

const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

const Danger: Story = {
  args: {
    variant: "danger",
    children: "Supprimer",
  },
};

const WithIcons: Story = {
  args: {
    leadingIcon: <SaveIcon className="size-4" />,
    trailingIcon: <ArrowRightIcon className="size-4" />,
  },
};

const Loading: Story = {
  args: {
    loading: true,
  },
};

const Catalog: Story = {
  render: () => <ButtonCatalog />,
};

const IconButtonStory: Story = {
  name: "IconButton",
  render: () => <IconButton label="Ajouter aux favoris" icon={<HeartIcon className="size-4" />} variant="secondary" />,
};

const LinkButtonStory: Story = {
  name: "LinkButton",
  render: () => <LinkButton href="#" trailingIcon={<ArrowRightIcon className="size-4" />}>Voir le studio</LinkButton>,
};

const ButtonGroupStory: Story = {
  name: "ButtonGroup",
  render: () => <ButtonGroup aria-label="Actions"><Button variant="secondary">Annuler</Button><Button>Confirmer</Button></ButtonGroup>,
};

const SubmitButtonStory: Story = {
  name: "SubmitButton",
  render: () => <form><SubmitButton pendingLabel="Enregistrement">Enregistrer</SubmitButton></form>,
};

export default meta;
export {
  ButtonGroupStory,
  Catalog,
  Danger,
  Ghost,
  IconButtonStory,
  LinkButtonStory,
  Loading,
  Primary,
  Secondary,
  SubmitButtonStory,
  WithIcons,
};
