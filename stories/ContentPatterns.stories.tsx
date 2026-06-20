import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChoiceChip, KeyValue } from "@recordair-ds/ui-core";
import { CircleHelpIcon } from "@recordair-ds/ui-core/icons";
import {
  BookingField as BookingFieldComponent,
  DetailCard as DetailCardComponent,
  EmbeddedBookingCard as EmbeddedBookingCardComponent,
  ErrorState as ErrorStateComponent,
  FormCard as FormCardComponent,
  Metric as MetricComponent,
} from "@recordair-ds/ui-patterns";

const ContentPatternsCatalog = () => (
  <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-2">
    <FormCardComponent title="Paramètres de réservation" subtitle="Informations affichées avant le paiement.">
      <div className="py-5">
        <BookingFieldComponent label="Type de session">
          <ChoiceChip selected>Enregistrement</ChoiceChip>
          <ChoiceChip>Répétition</ChoiceChip>
        </BookingFieldComponent>
      </div>
    </FormCardComponent>
    <DetailCardComponent title="Détail de la réservation" description="Samedi 22 juin">
      <dl className="grid gap-3">
        <KeyValue label="Studio" value="Studio République" />
        <KeyValue label="Durée" value="2 heures" />
        <KeyValue label="Total" value="160 €" />
      </dl>
    </DetailCardComponent>
    <EmbeddedBookingCardComponent eyebrow="Réservation proposée" title="Studio République, 22 juin" metadata="2 h × 80 € = 160 €" actionLabel="Voir la proposition" actionHref="#" />
    <div className="grid grid-cols-3 gap-6 rounded-lg border border-neutral-200 bg-neutral-0 p-6">
      <MetricComponent label="Réservations" value="31" supportingText="Ce mois-ci" />
      <MetricComponent label="Occupation" value="68 %" supportingText="+6 points" />
      <MetricComponent label="Revenu" value="4 280 €" supportingText="Net" />
    </div>
  </div>
);

const meta = {
  title: "Patterns/Content and booking",
  component: ContentPatternsCatalog,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ContentPatternsCatalog>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { KeyValue } from "@recordair-ds/ui-core";
import { BookingField, DetailCard, EmbeddedBookingCard, FormCard, Metric } from "@recordair-ds/ui-patterns";`,
      },
    },
  },
};

const BookingField: Story = {
  render: () => <BookingFieldComponent label="Type de session"><ChoiceChip selected>Enregistrement</ChoiceChip><ChoiceChip>Répétition</ChoiceChip></BookingFieldComponent>,
};

const DetailCard: Story = {
  render: () => <div className="w-96"><DetailCardComponent title="Détail"><KeyValue label="Total" value="160 €" /></DetailCardComponent></div>,
};

const EmbeddedBookingCard: Story = {
  render: () => <EmbeddedBookingCardComponent eyebrow="Réservation proposée" title="Studio République, 22 juin" metadata="2 h × 80 € = 160 €" actionLabel="Voir la proposition" actionHref="#" />,
};

const ErrorState: Story = {
  render: () => <ErrorStateComponent code="404" icon={<CircleHelpIcon className="size-12" />} title="Page introuvable" description="Cette page n’existe pas ou a été déplacée." actions={[{ label: "Retour à l’accueil", href: "#" }, { label: "Réessayer", variant: "secondary", onClick: () => undefined }]} />,
};

const FormCard: Story = {
  render: () => <div className="w-full max-w-content-md"><FormCardComponent title="Informations" subtitle="Données visibles publiquement."><div className="py-5">Contenu du formulaire</div></FormCardComponent></div>,
};

const Metric: Story = {
  render: () => <MetricComponent label="Revenu net" value="4 280 €" supportingText="Ce mois-ci" />,
};

export default meta;
export { BookingField, Catalog, DetailCard, EmbeddedBookingCard, ErrorState, FormCard, Metric };
