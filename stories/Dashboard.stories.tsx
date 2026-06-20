import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@recordair/ui-core";
import {
  KpiCard,
  SectionHeader,
  SummaryLine,
  TrendChip,
} from "@recordair/ui-patterns";

const DashboardOverview = () => (
  <div className="grid w-full max-w-5xl gap-6">
    <SectionHeader title="Vue d’ensemble" actionLabel="Voir les revenus" actionHref="#" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <KpiCard label="Revenu net" value="4 280 €" supportingText="+12 %" supportingTone="success" />
      <KpiCard label="Réservations" value="31" supportingText="4 en attente" supportingTone="warning" />
      <KpiCard label="Taux d’occupation" value="68 %" supportingText="+6 points" supportingTone="success" />
      <KpiCard label="Panier moyen" value="138 €" supportingText="Stable" />
    </div>
    <Card className="gap-4 p-6">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-neutral-900">Performance mensuelle</span>
        <TrendChip direction="up" value="+12 %" accessibleLabel="Hausse de 12 pour cent" />
      </div>
      <SummaryLine label="Chiffre d’affaires" value="5 035 €" />
      <SummaryLine label="Commission plateforme" value="755 €" />
      <SummaryLine
        label="Revenu net"
        value="4 280 €"
        className="border-t border-neutral-200 pt-4"
      />
    </Card>
  </div>
);

const meta = {
  title: "Patterns/Dashboard",
  component: DashboardOverview,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DashboardOverview>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Card } from "@recordair/ui-core";
import { KpiCard, SectionHeader, SummaryLine, TrendChip } from "@recordair/ui-patterns";

export const Dashboard = () => (
  <div className="grid gap-6">
    <SectionHeader title="Vue d’ensemble" actionLabel="Voir les revenus" actionHref="#" />
    <KpiCard label="Revenu net" value="4 280 €" supportingText="+12 %" supportingTone="success" />
    <Card className="gap-4 p-6">
      <TrendChip direction="up" value="+12 %" accessibleLabel="Hausse de 12 pour cent" />
      <SummaryLine label="Chiffre d’affaires" value="5 035 €" />
      <SummaryLine label="Revenu net" value="4 280 €" />
    </Card>
  </div>
);`,
      },
    },
  },
};

export default meta;
export { Overview };
