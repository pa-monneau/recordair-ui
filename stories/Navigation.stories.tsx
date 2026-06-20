import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ChoiceChip, EmptyState, IconBox, Progress, Tabs } from "@recordair-ds/ui-core";
import { CalendarDaysIcon, MicIcon, SearchIcon } from "@recordair-ds/ui-core/icons";

const tabItems = [
  { id: "upcoming", label: "À venir" },
  { id: "past", label: "Passées" },
  { id: "cancelled", label: "Annulées" },
] as const;

const NavigationCatalog = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedChip, setSelectedChip] = useState("recording");

  return (
    <div className="flex w-full max-w-2xl flex-col gap-8">
      <Tabs items={tabItems} activeId={activeTab} label="Réservations" onChange={setActiveTab} />
      <div className="flex flex-wrap gap-2">
        <ChoiceChip selected={selectedChip === "recording"} onClick={() => setSelectedChip("recording")} icon={<MicIcon className="size-4" />}>Enregistrement</ChoiceChip>
        <ChoiceChip selected={selectedChip === "rehearsal"} onClick={() => setSelectedChip("rehearsal")} icon={<CalendarDaysIcon className="size-4" />}>Répétition</ChoiceChip>
      </div>
      <div className="flex flex-col gap-2"><span className="text-sm font-semibold text-neutral-900">Profil complété à 72 %</span><Progress value={72} label="Profil complété à 72 pour cent" /></div>
      <EmptyState
        icon={<IconBox tone="neutral" size="lg" icon={<SearchIcon />} />}
        title="Aucun studio trouvé"
        description="Modifie tes filtres ou élargis la zone de recherche."
        action={<Button variant="secondary">Réinitialiser les filtres</Button>}
      />
    </div>
  );
};

const meta = {
  title: "Core/Navigation and states",
  component: NavigationCatalog,
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationCatalog>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
import { Button, ChoiceChip, EmptyState, IconBox, Progress, Tabs } from "@recordair-ds/ui-core";
import { MicIcon, SearchIcon } from "@recordair-ds/ui-core/icons";

export const BookingNavigation = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="flex flex-col gap-8">
      <Tabs
        items={[{ id: "upcoming", label: "À venir" }, { id: "past", label: "Passées" }]}
        activeId={activeTab}
        label="Réservations"
        onChange={setActiveTab}
      />
      <ChoiceChip selected icon={<MicIcon className="size-4" />}>Enregistrement</ChoiceChip>
      <Progress value={72} label="Profil complété à 72 pour cent" />
      <EmptyState
        icon={<IconBox tone="neutral" icon={<SearchIcon />} />}
        title="Aucun studio trouvé"
        action={<Button variant="secondary">Réinitialiser</Button>}
      />
    </div>
  );
};`,
      },
    },
  },
};

const TabsStory: Story = {
  name: "Tabs",
  render: () => <Tabs items={tabItems} activeId="upcoming" label="Réservations" onChange={() => undefined} />,
};

const ChoiceChipStory: Story = {
  name: "ChoiceChip",
  render: () => <ChoiceChip selected icon={<MicIcon className="size-4" />}>Enregistrement</ChoiceChip>,
};

const ProgressStory: Story = {
  name: "Progress",
  render: () => <div className="w-96"><Progress value={72} label="Profil complété à 72 pour cent" /></div>,
};

const EmptyStateStory: Story = {
  name: "EmptyState",
  render: () => (
    <div className="w-[32rem]"><EmptyState icon={<IconBox tone="neutral" icon={<SearchIcon />} />} title="Aucun studio trouvé" description="Modifie les filtres de recherche." /></div>
  ),
};

export default meta;
export { Catalog, ChoiceChipStory, EmptyStateStory, ProgressStory, TabsStory };
