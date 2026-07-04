import type { Meta, StoryObj } from "@storybook/react-vite";
import { MicIcon } from "@recordair/ui-core/icons";
import {
  RoleBadge as RoleBadgeComponent,
  RolePickerCard as RolePickerCardComponent,
  StatusPill as StatusPillComponent,
} from "@recordair/ui-patterns";

const IdentityCatalog = () => (
  <div className="grid w-full max-w-4xl gap-8">
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-6">
      <RoleBadgeComponent role="artist" />
      <RoleBadgeComponent role="studio" />
      <RoleBadgeComponent role="pro" />
      <StatusPillComponent label="Vérifié" tone="success" />
    </div>
    <div className="max-w-sm">
      <RolePickerCardComponent
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

/**
 * Identité de rôle (artiste / studio / pro) et statut de vérification.
 * `RoleBadge` et `RolePickerCard` partagent la même palette par rôle
 * (`role-{artist,studio,pro}-*`, cf. Foundations/Tokens). `StatusPill` est un
 * alias fin de `Badge` (couleur par défaut, sans les tailles `xs`/`dot` — voir
 * Core/Badge pour ces variantes).
 */
const meta = {
  title: "Patterns/Identity and status",
  component: IdentityCatalog,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof IdentityCatalog>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { RoleBadge, RolePickerCard, StatusPill } from "@recordair/ui-patterns";`,
      },
    },
  },
};

const RoleBadge: Story = {
  name: "RoleBadge",
  parameters: {
    docs: {
      description: {
        story: "Une pastille par rôle (icône + libellé). `label` permet de surcharger le texte par défaut.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <RoleBadgeComponent role="artist" />
      <RoleBadgeComponent role="studio" />
      <RoleBadgeComponent role="pro" />
    </div>
  ),
};

const RolePickerCardDefault: Story = {
  name: "RolePickerCard — action seule",
  parameters: {
    docs: {
      description: {
        story: "`interaction=\"action\"` (défaut) : seul le CTA est cliquable, le reste de la carte n'est pas un lien.",
      },
    },
  },
  render: () => (
    <div className="w-96">
      <RolePickerCardComponent
        role="artist"
        href="#"
        Icon={MicIcon}
        title="Je suis artiste"
        description="Trouve et réserve le studio adapté à ton projet."
        bullets={["Comparer les studios", "Réserver un créneau", "Payer en ligne"]}
        cta="Créer mon compte"
      />
    </div>
  ),
};

const RolePickerCardAsCard: Story = {
  name: "RolePickerCard — carte interactive",
  parameters: {
    docs: {
      description: {
        story: "`interaction=\"card\"` : toute la carte est un lien (hover/focus sur l'ensemble), sans lien imbriqué dans le CTA.",
      },
    },
  },
  render: () => (
    <div className="w-96">
      <RolePickerCardComponent
        interaction="card"
        role="artist"
        href="#"
        Icon={MicIcon}
        title="Je suis artiste"
        description="Trouve le studio adapté à ton projet."
        bullets={["Comparer les studios", "Réserver un créneau", "Payer en ligne"]}
        cta="Créer mon compte"
      />
    </div>
  ),
};

const StatusPill: Story = {
  name: "StatusPill",
  parameters: {
    docs: {
      description: {
        story: "Pastille de statut (`tone` : neutral/success/error/warning/info). Utilisé ex. pour la vérification e-mail du profil.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <StatusPillComponent label="Vérifié" tone="success" />
      <StatusPillComponent label="En attente" tone="warning" />
      <StatusPillComponent label="Refusé" tone="error" />
    </div>
  ),
};

export default meta;
export { Catalog, RoleBadge, RolePickerCardAsCard, RolePickerCardDefault, StatusPill };
