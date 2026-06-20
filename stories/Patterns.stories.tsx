import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@recordair-ds/ui-core";
import { MicIcon } from "@recordair-ds/ui-core/icons";
import {
  BookingChip,
  FormRow,
  ProfileSectionCard,
  RecordairLogo,
  RoleBadge,
  RolePickerCard,
  StatusPill,
  SummaryLine,
  TrendChip,
} from "@recordair-ds/ui-patterns";

const PatternsDemo = () => (
  <div className="grid w-full max-w-5xl gap-8">
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-6">
      <RecordairLogo />
      <RoleBadge role="artist" />
      <RoleBadge role="studio" />
      <StatusPill label="Vérifié" tone="success" />
      <TrendChip direction="up" value="+12 %" accessibleLabel="Hausse de 12 pour cent" />
      <BookingChip active>14:00</BookingChip>
      <BookingChip active={false}>15:00</BookingChip>
    </div>
    <ProfileSectionCard title="Informations" subtitle="Données visibles sur ton profil.">
      <FormRow label="Nom public" htmlFor="public-name" last>
        <Input id="public-name" defaultValue="Studio République" />
      </FormRow>
    </ProfileSectionCard>
    <div className="rounded-lg border border-neutral-200 bg-neutral-0 p-6">
      <SummaryLine label="Prix studio" value="160 €" />
      <SummaryLine label="Total" value="160 €" className="mt-3 border-t border-neutral-200 pt-3" />
    </div>
    <div className="max-w-sm">
      <RolePickerCard
        role="artist"
        href="#"
        Icon={MicIcon}
        title="Je suis artiste"
        description="Trouve et réserve le studio adapté à ton projet."
        bullets={["Comparer les studios", "Réserver un créneau", "Payer en ligne"]}
        cta="Créer mon compte"
      />
    </div>
  </div>
);

const meta = {
  title: "Patterns/Record'air",
  component: PatternsDemo,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof PatternsDemo>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {};

export default meta;
export { Overview };
