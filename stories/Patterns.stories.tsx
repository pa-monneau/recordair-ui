import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, Input, SuggestionList, SuggestionListItem } from "@recordair/ui-core";
import { HouseIcon, MapPinIcon, MicIcon } from "@recordair/ui-core/icons";
import {
  BookingChip,
  BookingCard,
  FormRow,
  KpiCard,
  NotificationCard,
  Pagination,
  ProfileSectionCard,
  RecordairLogo,
  RecordairMark,
  ReviewCard,
  RoleBadge,
  RolePickerCard,
  SectionHeader,
  StatusPill,
  Stepper,
  StudioCard,
  SummaryLine,
  TrendChip,
} from "@recordair/ui-patterns";

const PatternsOverview = () => (
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
  component: PatternsOverview,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof PatternsOverview>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Input } from "@recordair/ui-core";
import { MicIcon } from "@recordair/ui-core/icons";
import {
  BookingChip,
  FormRow,
  ProfileSectionCard,
  RecordairLogo,
  RoleBadge,
  RolePickerCard,
  StatusPill,
} from "@recordair/ui-patterns";

export const RecordairPatterns = () => (
  <div className="grid gap-8">
    <RecordairLogo />
    <div className="flex gap-3">
      <RoleBadge role="artist" />
      <StatusPill label="Vérifié" tone="success" />
      <BookingChip active>14:00</BookingChip>
    </div>
    <ProfileSectionCard title="Informations" subtitle="Données visibles sur ton profil.">
      <FormRow label="Nom public" htmlFor="public-name" last>
        <Input id="public-name" defaultValue="Studio République" />
      </FormRow>
    </ProfileSectionCard>
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
);`,
      },
    },
  },
};

const BookingChipStory: Story = { name: "BookingChip", render: () => <BookingChip active>14:00</BookingChip> };

const BookingCardStory: Story = {
  name: "BookingCard",
  render: () => <div className="w-[36rem]"><BookingCard detailsLabel="Voir le détail" booking={{ id: "booking-1", studioName: "Studio République", studioCity: "Lille", durationLabel: "2 heures", totalLabel: "160 €", status: "confirmed", statusLabel: "Confirmée", href: "#" }} /></div>,
};

const FormRowStory: Story = {
  name: "FormRow",
  render: () => <div className="w-[44rem]"><FormRow label="Nom public" htmlFor="pattern-name" last><Input id="pattern-name" /></FormRow></div>,
};

const KpiCardStory: Story = {
  name: "KpiCard",
  render: () => <div className="w-64"><KpiCard label="Revenu net" value="4 280 €" supportingText="+12 %" supportingTone="success" /></div>,
};

const NotificationCardStory: Story = {
  name: "NotificationCard",
  render: () => <div className="w-[36rem]"><NotificationCard notification={{ id: "notification-1", title: "Nouvelle réservation", subtitle: "Samedi 22 juin à 14 h", read: false }} unreadLabel="Non lue" deleteLabel="Supprimer" onOpen={() => undefined} onDelete={() => undefined} /></div>,
};

const PaginationStory: Story = {
  name: "Pagination",
  render: () => <Pagination currentPage={4} totalPages={12} totalResults={128} hrefForPage={(page) => `#page-${page}`} labels={{ navigation: "Pagination", previous: "Page précédente", next: "Page suivante", page: (page) => `Page ${page}`, status: (current, total, results) => `Page ${current} sur ${total}, ${results} résultats` }} />,
};

const ProfileSectionCardStory: Story = {
  name: "ProfileSectionCard",
  render: () => <div className="w-[40rem]"><ProfileSectionCard title="Informations" subtitle="Données visibles publiquement."><FormRow label="Nom" htmlFor="profile-name" last><Input id="profile-name" /></FormRow></ProfileSectionCard></div>,
};

const RecordairLogoStory: Story = { name: "RecordairLogo", render: () => <RecordairLogo /> };
const RecordairMarkStory: Story = { name: "RecordairMark", render: () => <RecordairMark /> };
const RoleBadgeStory: Story = { name: "RoleBadge", render: () => <RoleBadge role="artist" /> };

const ReviewCardStory: Story = {
  name: "ReviewCard",
  render: () => <div className="w-96"><ReviewCard ratingLabel="5 étoiles sur 5" review={{ authorName: "Camille", body: "Accueil précis, matériel prêt et excellente acoustique.", dateLabel: "juin 2026", rating: 5 }} /></div>,
};

const RolePickerCardStory: Story = {
  name: "RolePickerCard - carte interactive",
  render: () => <div className="w-96"><RolePickerCard interaction="card" role="artist" href="#" Icon={MicIcon} title="Je suis artiste" description="Trouve le studio adapté à ton projet." bullets={["Comparer les studios", "Réserver un créneau", "Payer en ligne"]} cta="Créer mon compte" /></div>,
};

const SectionHeaderStory: Story = { name: "SectionHeader", render: () => <div className="w-[36rem]"><SectionHeader title="Studios recommandés" actionLabel="Tout voir" actionHref="#" /></div> };
const StatusPillStory: Story = { name: "StatusPill", render: () => <StatusPill label="Vérifié" tone="success" /> };

const StepperStory: Story = {
  name: "Stepper",
  render: () => <div className="w-[48rem]"><Stepper currentStep={2} ariaLabel="Progression" completedStepLabel="Étape terminée" steps={[{ id: "slot", label: "Créneau" }, { id: "payment", label: "Paiement" }, { id: "confirmation", label: "Confirmation" }]} /></div>,
};

const StudioCardStory: Story = {
  name: "StudioCard",
  render: () => <div className="w-96"><StudioCard studio={{ name: "Studio République", location: "Lille Centre", type: "Enregistrement", rating: "4,9", reviews: 38, tags: ["Voix", "Mixage", "Podcast"], priceLabel: "80 €", rateSuffix: "par heure", gradient: "studio", href: "#", ratingAriaLabel: "Note de 4,9 sur 5" }} /></div>,
};

const SuggestionListStory: Story = {
  name: "SuggestionList",
  render: () => (
    <div className="w-96">
      <SuggestionList heading="Suggestions de destinations">
        <SuggestionListItem
          tone="brand"
          icon={<MapPinIcon />}
          title="À proximité"
          subtitle="Découvre les studios autour de toi"
        />
        <SuggestionListItem
          icon={<HouseIcon />}
          title="Lille"
          subtitle="Nord, Hauts-de-France"
        />
        <SuggestionListItem
          icon={<HouseIcon />}
          title="Lyon"
          subtitle="Rhône, Auvergne-Rhône-Alpes"
        />
      </SuggestionList>
    </div>
  ),
};

const SummaryLineStory: Story = { name: "SummaryLine", render: () => <Card className="w-96 p-5"><SummaryLine label="Total" value="160 €" /></Card> };
const TrendChipStory: Story = { name: "TrendChip", render: () => <TrendChip direction="up" value="+12 %" accessibleLabel="Hausse de 12 pour cent" /> };

export default meta;
export {
  BookingCardStory,
  BookingChipStory,
  FormRowStory,
  KpiCardStory,
  NotificationCardStory,
  Overview,
  PaginationStory,
  ProfileSectionCardStory,
  RecordairLogoStory,
  RecordairMarkStory,
  ReviewCardStory,
  RoleBadgeStory,
  RolePickerCardStory,
  SectionHeaderStory,
  StatusPillStory,
  StepperStory,
  StudioCardStory,
  SuggestionListStory,
  SummaryLineStory,
  TrendChipStory,
};
