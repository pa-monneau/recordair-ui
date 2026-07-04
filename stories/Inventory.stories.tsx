import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Card, SearchInput } from "@recordair/ui-core";
import { sourceComponents } from "./sourceInventory";
import type { SourceComponentStatus } from "./sourceInventory";

type InventoryFilter = SourceComponentStatus | "all";

type SourceInventoryProps = {
  initialStatus?: InventoryFilter;
};

const statusConfig: Record<SourceComponentStatus, { label: string; tone: "success" | "warning" | "neutral" }> = {
  extracted: { label: "Extrait", tone: "success" },
  candidate: { label: "Candidat DS", tone: "warning" },
  product: { label: "Couplé produit", tone: "neutral" },
};

const domains = Array.from(new Set(sourceComponents.map((component) => component.domain))).sort();

const SourceInventory = ({ initialStatus = "all" }: SourceInventoryProps) => {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [status, setStatus] = useState<InventoryFilter>(initialStatus);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredComponents = useMemo(
    () => sourceComponents.filter((component) => {
      const replacement = "replacement" in component ? component.replacement : undefined;
      const matchesQuery = !normalizedQuery || [component.name, component.source, component.description, replacement].some((value) => value?.toLowerCase().includes(normalizedQuery));
      const matchesDomain = domain === "all" || component.domain === domain;
      const matchesStatus = status === "all" || component.status === status;

      return matchesQuery && matchesDomain && matchesStatus;
    }),
    [domain, normalizedQuery, status],
  );
  const countByStatus = (targetStatus: SourceComponentStatus): number => sourceComponents.filter((component) => component.status === targetStatus).length;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-heading-lg font-bold text-neutral-900">Inventaire de l’UI Record’air</h1>
        <p className="max-w-3xl text-sm leading-6 text-neutral-600">Chaque composant source est documenté sans dépendance runtime vers Record’air. La classification est un point de départ pour décider ce qui rejoint le design system et ce qui reste dans le produit.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card padding="sm"><span className="text-label text-neutral-500">Total source</span><strong className="text-heading-lg text-neutral-900">{sourceComponents.length}</strong></Card>
        <Card padding="sm"><span className="text-label text-neutral-500">Extraits</span><strong className="text-heading-lg text-success-text">{countByStatus("extracted")}</strong></Card>
        <Card padding="sm"><span className="text-label text-neutral-500">Candidats DS</span><strong className="text-heading-lg text-warning-text">{countByStatus("candidate")}</strong></Card>
        <Card padding="sm"><span className="text-label text-neutral-500">Couplés produit</span><strong className="text-heading-lg text-neutral-700">{countByStatus("product")}</strong></Card>
      </div>

      <Card padding="sm" className="gap-3 md:flex-row">
        <SearchInput value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Rechercher un composant" placeholder="Nom, rôle ou chemin" />
        <select value={domain} onChange={(event) => setDomain(event.target.value)} aria-label="Filtrer par domaine" className="h-[var(--size-btn-md)] rounded-md border-control border-neutral-200 bg-neutral-0 px-4 text-sm text-neutral-900">
          <option value="all">Tous les domaines</option>
          {domains.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value as InventoryFilter)} aria-label="Filtrer par statut" className="h-[var(--size-btn-md)] rounded-md border-control border-neutral-200 bg-neutral-0 px-4 text-sm text-neutral-900">
          <option value="all">Tous les statuts</option>
          <option value="extracted">Extraits</option>
          <option value="candidate">Candidats DS</option>
          <option value="product">Couplés produit</option>
        </select>
      </Card>

      <p className="text-label text-neutral-500">{filteredComponents.length} composant(s) affiché(s)</p>

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[var(--size-inventory-table)] border-collapse text-left text-sm">
          <thead className="bg-neutral-100 text-neutral-600">
            <tr>
              <th className="px-5 py-3 font-semibold">Composant</th>
              <th className="px-5 py-3 font-semibold">Documentation</th>
              <th className="px-5 py-3 font-semibold">Domaine</th>
              <th className="px-5 py-3 font-semibold">Statut</th>
              <th className="px-5 py-3 font-semibold">Export DS</th>
              <th className="px-5 py-3 font-semibold">Dépendances</th>
            </tr>
          </thead>
          <tbody>
            {filteredComponents.map((component) => {
              const componentStatus = statusConfig[component.status];
              const replacement = "replacement" in component ? component.replacement : undefined;

              return (
                <tr key={component.source} className="border-t border-neutral-200 align-top">
                  <td className="px-5 py-4"><strong className="block text-neutral-900">{component.name}</strong><code className="mt-1 block text-caption text-neutral-500">{component.source}</code></td>
                  <td className="max-w-md px-5 py-4 leading-5 text-neutral-600">{component.description}</td>
                  <td className="px-5 py-4"><Badge>{component.domain}</Badge></td>
                  <td className="px-5 py-4"><Badge tone={componentStatus.tone}>{componentStatus.label}</Badge></td>
                  <td className="px-5 py-4"><code className="text-caption text-brand-primary">{replacement ?? "—"}</code></td>
                  <td className="max-w-xs px-5 py-4 text-caption text-neutral-500">{component.dependencies.length > 0 ? component.dependencies.join(", ") : "Aucune dépendance externe"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

/**
 * Audit des composants source du produit Record'air (`airstudio/airstudio`,
 * snapshot du 20 juin 2026 — voir `docs/MIGRATION_INVENTORY.md`), filtrable
 * par domaine et par statut de migration : **Extrait** (déjà dans le design
 * system, colonne "Export DS" = remplacement), **Candidat DS** (frontière
 * réutilisable identifiée, pas encore extrait) ou **Couplé produit**
 * (dépend de Next.js/Supabase/paiement, reste dans l'app par design).
 */
const meta = {
  title: "Inventory/Record'air source",
  component: SourceInventory,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SourceInventory>;

type Story = StoryObj<typeof meta>;

const AllComponents: Story = { args: { initialStatus: "all" } };
const Extracted: Story = { args: { initialStatus: "extracted" } };
const DesignSystemCandidates: Story = { args: { initialStatus: "candidate" } };
const ProductCoupled: Story = { args: { initialStatus: "product" } };

export default meta;
export { AllComponents, DesignSystemCandidates, Extracted, ProductCoupled };
