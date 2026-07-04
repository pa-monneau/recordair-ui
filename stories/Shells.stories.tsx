import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, IconButton, LinkTabs, NavigationList } from "@recordair/ui-core";
import { BellIcon, CalendarDaysIcon, HouseIcon, SettingsIcon, UserIcon } from "@recordair/ui-core/icons";
import {
  AuthVisualPanel as AuthVisualPanelComponent,
  MobileNavigation as MobileNavigationComponent,
  PageHeader as PageHeaderComponent,
  RecordairLogo as RecordairLogoComponent,
  RecordairMark as RecordairMarkComponent,
  SiteHeader as SiteHeaderComponent,
} from "@recordair/ui-patterns";

const headerTabs = [
  { href: "/studios/42", label: "Aperçu" },
  { href: "/studios/42/bookings", label: "Réservations", count: 12 },
  { href: "/studios/42/reviews", label: "Avis", count: 8 },
] as const;

const navigationItems = [
  { href: "/", label: "Accueil", leadingIcon: <HouseIcon className="size-5" />, exact: true },
  { href: "/reservations", label: "Réservations", leadingIcon: <CalendarDaysIcon className="size-5" />, badge: 3 },
  { href: "/profile", label: "Profil", leadingIcon: <UserIcon className="size-5" /> },
  { href: "/settings", label: "Paramètres", leadingIcon: <SettingsIcon className="size-5" /> },
] as const;

const ShellCatalog = () => (
  <div className="flex w-full flex-col gap-12">
    <SiteHeaderComponent
      sticky={false}
      contained
      brand={<RecordairLogoComponent href="#" size="sm" />}
      navigation={<LinkTabs items={headerTabs} activeHref="/studios/42" label="Navigation principale" />}
      actions={<><IconButton icon={<BellIcon className="size-5" />} label="Notifications" /><Button size="sm">Publier un studio</Button></>}
    />
    <div className="mx-auto w-full max-w-site px-8">
      <PageHeaderComponent
        title="Studio République"
        description="Lille, France"
        backLink={{ label: "Tous les studios", href: "#" }}
        metaLink={{ label: "Voir la page publique", href: "#" }}
        navigation={<LinkTabs items={headerTabs} activeHref="/studios/42/bookings" label="Sections du studio" />}
      />
    </div>
  </div>
);

/**
 * Chrome applicatif : `SiteHeader` (en-tête global, `brand`/`navigation`/
 * `actions`), `PageHeader` (en-tête de page avec retour + navigation
 * secondaire), `MobileNavigation` (menu hamburger, base = `NavigationList`),
 * `AuthVisualPanel` (panneau visuel des pages d'auth). `RecordairLogo`
 * (`size`, `href`) et `RecordairMark` (icône seule) sont montrés composés
 * dans `SiteHeader` et ont chacun leur story isolée plus bas.
 */
const meta = {
  title: "Patterns/Shells and navigation",
  component: ShellCatalog,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ShellCatalog>;

type Story = StoryObj<typeof meta>;

const Catalog: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { LinkTabs } from "@recordair/ui-core";
import { PageHeader, RecordairLogo, SiteHeader } from "@recordair/ui-patterns";`,
      },
    },
  },
};

const SiteHeader: Story = {
  render: () => (
    <SiteHeaderComponent
      sticky={false}
      contained
      brand={<RecordairLogoComponent href="#" size="sm" />}
      actions={<Button size="sm">Se connecter</Button>}
    />
  ),
};

const PageHeader: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-site p-8">
      <PageHeaderComponent title="Studio République" description="Lille, France" backLink={{ label: "Tous les studios", href: "#" }} navigation={<LinkTabs items={headerTabs} activeHref="/studios/42" label="Sections du studio" />} />
    </div>
  ),
};

const MobileNavigation: Story = {
  render: () => (
    <div className="flex min-h-64 justify-end bg-neutral-0 p-8">
      <MobileNavigationComponent className="!block" items={navigationItems} activeHref="/reservations" label="Ouvrir la navigation" footer={<Button size="sm" block>Se déconnecter</Button>} />
    </div>
  ),
};

const AuthVisualPanel: Story = {
  render: () => (
    <div className="min-h-screen bg-surface-page">
      <AuthVisualPanelComponent
        heading={["Réserve.", "Crée.", "Vibre."]}
        tagline="Trouve le studio adapté à ton projet et réserve ton prochain créneau."
        testimonial={{ quote: "Une réservation claire et un studio parfaitement équipé.", author: "Maya D.", location: "Artiste à Lille" }}
        logoHref="#"
      />
    </div>
  ),
};

const RecordairLogo: Story = {
  render: () => <RecordairLogoComponent href="#" />,
};

const RecordairMark: Story = {
  render: () => <RecordairMarkComponent />,
};

export default meta;
export { AuthVisualPanel, Catalog, MobileNavigation, PageHeader, RecordairLogo, RecordairMark, SiteHeader };
