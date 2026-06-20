import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@recordair-ds/ui-core";
import {
  KpiCard,
  SectionHeader,
  SummaryLine,
  TrendChip,
} from "@recordair-ds/ui-patterns";

const DashboardDemo = () => (
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
  component: DashboardDemo,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DashboardDemo>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {};

export default meta;
export { Overview };
