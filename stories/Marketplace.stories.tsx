import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BookingCard,
  NotificationCard,
  Pagination,
  ReviewCard,
  Stepper,
  StudioCard,
} from "@recordair/ui-patterns";

const MarketplaceOverview = () => {
  const [notificationVisible, setNotificationVisible] = useState(true);

  return (
    <div className="grid w-full max-w-5xl gap-10">
      <Stepper
        currentStep={2}
        ariaLabel="Progression de la réservation"
        completedStepLabel="Étape terminée"
        steps={[
          { id: "slot", eyebrow: "Étape 1", label: "Créneau" },
          { id: "payment", eyebrow: "Étape 2", label: "Paiement" },
          { id: "confirmation", eyebrow: "Étape 3", label: "Confirmation" },
        ]}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <StudioCard
          studio={{
            name: "Studio République",
            location: "Lille Centre",
            type: "Enregistrement",
            rating: "4,9",
            reviews: 38,
            tags: ["Voix", "Mixage", "Podcast"],
            priceLabel: "80 €",
            rateSuffix: "par heure",
            gradient: "studio",
            href: "#",
            ratingAriaLabel: "Note de 4,9 sur 5, 38 avis",
          }}
        />
        <div className="flex flex-col gap-6">
          <BookingCard
            detailsLabel="Voir le détail"
            booking={{
              id: "booking-1",
              studioName: "Studio République",
              studioCity: "Lille",
              durationLabel: "2 heures",
              totalLabel: "160 €",
              status: "confirmed",
              statusLabel: "Confirmée",
              href: "#",
            }}
          />
          {notificationVisible ? (
            <NotificationCard
              notification={{
                id: "notification-1",
                title: "Nouvelle demande de réservation",
                subtitle: "Studio République, samedi 22 juin à 14 h",
                read: false,
              }}
              unreadLabel="Non lue"
              deleteLabel="Supprimer la notification"
              onOpen={() => undefined}
              onDelete={() => setNotificationVisible(false)}
            />
          ) : null}
          <ReviewCard
            ratingLabel="5 étoiles sur 5"
            review={{
              authorName: "Camille",
              body: "Accueil précis, matériel prêt et excellente acoustique.",
              dateLabel: "juin 2026",
              rating: 5,
            }}
          />
        </div>
      </div>
      <Pagination
        currentPage={4}
        totalPages={12}
        totalResults={128}
        hrefForPage={(page) => `#page-${page}`}
        labels={{
          navigation: "Pagination des studios",
          previous: "Page précédente",
          next: "Page suivante",
          page: (page) => `Page ${page}`,
          status: (current, total, results) =>
            `Page ${current} sur ${total}, ${results} résultats`,
        }}
      />
    </div>
  );
};

/**
 * Parcours de réservation studio : `Stepper` (progression multi-étapes),
 * `StudioCard` (carte studio de résultat de recherche), `BookingCard`
 * (réservation dans "Mes réservations"), `NotificationCard`, `ReviewCard`,
 * `Pagination` (résultats de recherche).
 */
const meta = {
  title: "Patterns/Marketplace",
  component: MarketplaceOverview,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof MarketplaceOverview>;

type Story = StoryObj<typeof meta>;

const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
import { NotificationCard, Pagination, StudioCard } from "@recordair/ui-patterns";

export const Marketplace = () => {
  const [notificationVisible, setNotificationVisible] = useState(true);

  return (
    <div className="grid gap-6">
      <StudioCard studio={{
        name: "Studio République",
        location: "Lille Centre",
        type: "Enregistrement",
        rating: "4,9",
        reviews: 38,
        tags: ["Voix", "Mixage", "Podcast"],
        priceLabel: "80 €",
        rateSuffix: "par heure",
        gradient: "studio",
        href: "#",
        ratingAriaLabel: "Note de 4,9 sur 5, 38 avis",
      }} />
      {notificationVisible ? (
        <NotificationCard
          notification={{ id: "notification-1", title: "Nouvelle réservation", read: false }}
          unreadLabel="Non lue"
          deleteLabel="Supprimer"
          onOpen={() => undefined}
          onDelete={() => setNotificationVisible(false)}
        />
      ) : null}
      <Pagination
        currentPage={1}
        totalPages={12}
        totalResults={128}
        hrefForPage={(page) => \`#page-\${page}\`}
        labels={{
          navigation: "Pagination des studios",
          previous: "Page précédente",
          next: "Page suivante",
          page: (page) => \`Page \${page}\`,
          status: (current, total, results) => \`Page \${current} sur \${total}, \${results} résultats\`,
        }}
      />
    </div>
  );
};`,
      },
    },
  },
};

const BookingCardStory: Story = {
  name: "BookingCard",
  render: () => (
    <div className="w-[36rem]">
      <BookingCard
        detailsLabel="Voir le détail"
        booking={{
          id: "booking-1",
          studioName: "Studio République",
          studioCity: "Lille",
          durationLabel: "2 heures",
          totalLabel: "160 €",
          status: "confirmed",
          statusLabel: "Confirmée",
          href: "#",
        }}
      />
    </div>
  ),
};

const NotificationCardStory: Story = {
  name: "NotificationCard",
  render: () => (
    <div className="w-[36rem]">
      <NotificationCard
        notification={{ id: "notification-1", title: "Nouvelle réservation", subtitle: "Samedi 22 juin à 14 h", read: false }}
        unreadLabel="Non lue"
        deleteLabel="Supprimer"
        onOpen={() => undefined}
        onDelete={() => undefined}
      />
    </div>
  ),
};

const PaginationStory: Story = {
  name: "Pagination",
  render: () => (
    <Pagination
      currentPage={4}
      totalPages={12}
      totalResults={128}
      hrefForPage={(page) => `#page-${page}`}
      labels={{
        navigation: "Pagination des studios",
        previous: "Page précédente",
        next: "Page suivante",
        page: (page) => `Page ${page}`,
        status: (current, total, results) => `Page ${current} sur ${total}, ${results} résultats`,
      }}
    />
  ),
};

const ReviewCardStory: Story = {
  name: "ReviewCard",
  render: () => (
    <div className="w-96">
      <ReviewCard
        ratingLabel="5 étoiles sur 5"
        review={{ authorName: "Camille", body: "Accueil précis, matériel prêt et excellente acoustique.", dateLabel: "juin 2026", rating: 5 }}
      />
    </div>
  ),
};

const StepperStory: Story = {
  name: "Stepper",
  render: () => (
    <div className="w-[48rem]">
      <Stepper
        currentStep={2}
        ariaLabel="Progression de la réservation"
        completedStepLabel="Étape terminée"
        steps={[
          { id: "slot", eyebrow: "Étape 1", label: "Créneau" },
          { id: "payment", eyebrow: "Étape 2", label: "Paiement" },
          { id: "confirmation", eyebrow: "Étape 3", label: "Confirmation" },
        ]}
      />
    </div>
  ),
};

const StudioCardStory: Story = {
  name: "StudioCard",
  render: () => (
    <div className="w-96">
      <StudioCard
        studio={{
          name: "Studio République",
          location: "Lille Centre",
          type: "Enregistrement",
          rating: "4,9",
          reviews: 38,
          tags: ["Voix", "Mixage", "Podcast"],
          priceLabel: "80 €",
          rateSuffix: "par heure",
          gradient: "studio",
          href: "#",
          ratingAriaLabel: "Note de 4,9 sur 5, 38 avis",
        }}
      />
    </div>
  ),
};

export default meta;
export {
  BookingCardStory,
  NotificationCardStory,
  Overview,
  PaginationStory,
  ReviewCardStory,
  StepperStory,
  StudioCardStory,
};
