import type { Meta, StoryObj } from "@storybook/react-vite";

const colors = [
  ["brand-primary", "Action principale"],
  ["brand-secondary", "Accent de marque"],
  ["neutral-0", "Surface blanche"],
  ["neutral-100", "Surface secondaire"],
  ["neutral-500", "Texte secondaire"],
  ["neutral-900", "Texte principal"],
  ["success", "Succès"],
  ["warning", "Attention"],
  ["error", "Erreur"],
  ["info", "Information"],
  ["role-artist-from", "Rôle artiste"],
  ["role-studio-from", "Rôle studio"],
] as const;

const spacings = ["1", "2", "3", "4", "6", "8", "12", "16"] as const;

const FoundationsCatalog = () => (
  <div className="grid max-w-5xl gap-12">
    <section className="grid gap-5">
      <div>
        <h2 className="text-heading-lg font-bold text-neutral-900">Couleurs sémantiques</h2>
        <p className="text-body-sm text-neutral-500">Les usages restent compréhensibles sans dépendre uniquement de la couleur.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map(([token, description]) => (
          <article key={token} className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-0">
            <div className="h-20" style={{ backgroundColor: `var(--color-${token})` }} />
            <div className="grid gap-1 p-4">
              <code className="text-label font-semibold text-neutral-900">--color-{token}</code>
              <span className="text-caption text-neutral-500">{description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="grid gap-5">
      <h2 className="text-heading-lg font-bold text-neutral-900">Espacement</h2>
      <div className="grid gap-3 rounded-lg border border-neutral-200 bg-neutral-0 p-6">
        {spacings.map((token) => (
          <div key={token} className="flex items-center gap-4">
            <code className="w-24 text-label text-neutral-600">spacing-{token}</code>
            <div className="h-4 rounded-sm bg-brand-primary" style={{ width: `var(--spacing-${token})` }} />
          </div>
        ))}
      </div>
    </section>

    <section className="grid gap-5">
      <h2 className="text-heading-lg font-bold text-neutral-900">Typographie</h2>
      <div className="grid gap-5 rounded-lg border border-neutral-200 bg-neutral-0 p-6">
        <p className="text-display-lg font-black leading-none text-neutral-900">Display</p>
        <p className="text-heading-lg font-bold text-neutral-900">Heading large</p>
        <p className="text-heading-md font-semibold text-neutral-900">Heading medium</p>
        <p className="text-body leading-copy text-neutral-700">Corps de texte avec une hauteur de ligne confortable.</p>
        <p className="text-overline font-bold uppercase tracking-wide text-neutral-500">Overline</p>
      </div>
    </section>

    <section className="grid gap-5">
      <h2 className="text-heading-lg font-bold text-neutral-900">Rayons et ombres</h2>
      <div className="flex flex-wrap gap-6">
        <div className="size-24 rounded-sm border border-neutral-200 bg-neutral-0 shadow-card" />
        <div className="size-24 rounded-md border border-neutral-200 bg-neutral-0 shadow-elevated" />
        <div className="size-24 rounded-lg border border-neutral-200 bg-neutral-0 shadow-brand" />
        <div className="size-24 rounded-xl border border-neutral-200 bg-neutral-0" />
      </div>
    </section>
  </div>
);

const meta = {
  title: "Foundations/Tokens",
  component: FoundationsCatalog,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Source de vérité visuelle du thème Record’air. Chaque composant consomme ces tokens, jamais une valeur locale.",
      },
    },
  },
} satisfies Meta<typeof FoundationsCatalog>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: `@import "tailwindcss";
@import "@recordair-ds/theme-recordair";`,
        language: "css",
      },
    },
  },
};

export default meta;
export { Overview };
