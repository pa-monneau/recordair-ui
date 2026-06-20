import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Card } from "@recordair-ds/ui-core";

type MigrationStatus = "extracted" | "partial" | "product";

type SourceCategory = {
  name: string;
  count: number;
  status: MigrationStatus;
};

const categories: readonly SourceCategory[] = [
  { name: "ui", count: 14, status: "extracted" },
  { name: "icons", count: 65, status: "extracted" },
  { name: "admin", count: 19, status: "partial" },
  { name: "auth", count: 7, status: "partial" },
  { name: "bookings", count: 17, status: "partial" },
  { name: "contact", count: 1, status: "product" },
  { name: "dashboard", count: 8, status: "partial" },
  { name: "explore", count: 11, status: "partial" },
  { name: "favorites", count: 4, status: "partial" },
  { name: "home", count: 7, status: "partial" },
  { name: "host", count: 19, status: "partial" },
  { name: "invoices", count: 1, status: "product" },
  { name: "layout", count: 10, status: "partial" },
  { name: "legal", count: 2, status: "product" },
  { name: "marketing", count: 4, status: "partial" },
  { name: "messages", count: 9, status: "partial" },
  { name: "notifications", count: 1, status: "extracted" },
  { name: "pro", count: 1, status: "product" },
  { name: "profile", count: 24, status: "partial" },
  { name: "revenue", count: 5, status: "partial" },
  { name: "studios", count: 14, status: "partial" },
];

const statusConfig: Record<MigrationStatus, { label: string; tone: "success" | "warning" | "neutral" }> = {
  extracted: { label: "Extrait", tone: "success" },
  partial: { label: "Partiel", tone: "warning" },
  product: { label: "Reste produit", tone: "neutral" },
};

const SourceInventory = () => (
  <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h1 className="text-heading-lg font-bold text-neutral-900">Couverture de l’UI Record’air</h1>
      <p className="text-sm text-neutral-600">243 composants React sources, dont 65 icônes. Une catégorie partielle contient encore des patterns à découpler du produit.</p>
    </div>
    <Card className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-neutral-100 text-neutral-600">
          <tr><th className="px-5 py-3 font-semibold">Domaine</th><th className="px-5 py-3 font-semibold">Fichiers</th><th className="px-5 py-3 font-semibold">Migration</th></tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            const status = statusConfig[category.status];

            return (
              <tr key={category.name} className="border-t border-neutral-200">
                <td className="px-5 py-3 font-medium text-neutral-900">{category.name}</td>
                <td className="px-5 py-3 text-neutral-600">{category.count}</td>
                <td className="px-5 py-3"><Badge tone={status.tone}>{status.label}</Badge></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  </div>
);

const meta = {
  title: "Inventory/Record'air source",
  component: SourceInventory,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SourceInventory>;

type Story = StoryObj<typeof meta>;

const Coverage: Story = {};

export default meta;
export { Coverage };
