type SourceComponentStatus = "extracted" | "candidate" | "product";

type SourceComponent = {
  name: string;
  source: string;
  domain: string;
  description: string;
  status: SourceComponentStatus;
  replacement?: string;
  dependencies: readonly string[];
};

const sourceComponents = [
  {
    "name": "AdminNav",
    "source": "components/admin/AdminNav.tsx",
    "domain": "admin",
    "description": "Élément de navigation admin nav du domaine admin.",
    "status": "extracted",
    "replacement": "NavigationList",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "AdminPagination",
    "source": "components/admin/AdminPagination.tsx",
    "domain": "admin",
    "description": "Composant admin pagination du domaine admin.",
    "status": "extracted",
    "replacement": "Pagination",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "BookingDetail",
    "source": "components/admin/BookingDetail.tsx",
    "domain": "admin",
    "description": "Composant booking detail du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/BookingStatusChip",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/bookings"
    ]
  },
  {
    "name": "BookingStatusChip",
    "source": "components/admin/BookingStatusChip.tsx",
    "domain": "admin",
    "description": "Indicateur booking status chip du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/services/admin/bookings"
    ]
  },
  {
    "name": "BookingsTable",
    "source": "components/admin/BookingsTable.tsx",
    "domain": "admin",
    "description": "Tableau bookings du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/BookingStatusChip",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/bookings"
    ]
  },
  {
    "name": "PasswordResetButton",
    "source": "components/admin/PasswordResetButton.tsx",
    "domain": "admin",
    "description": "Action password reset du domaine admin.",
    "status": "extracted",
    "replacement": "SubmitButton + Alert",
    "dependencies": [
      "@/actions/admin/users",
      "@/components/ui/Button"
    ]
  },
  {
    "name": "RoleChip",
    "source": "components/admin/RoleChip.tsx",
    "domain": "admin",
    "description": "Indicateur role chip du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/services/admin/users"
    ]
  },
  {
    "name": "StatCard",
    "source": "components/admin/StatCard.tsx",
    "domain": "admin",
    "description": "Carte stat réutilisée dans le domaine admin.",
    "status": "extracted",
    "replacement": "KpiCard / Metric",
    "dependencies": [
      "@/components/revenue/Card"
    ]
  },
  {
    "name": "StudioBookingHistoryTable",
    "source": "components/admin/StudioBookingHistoryTable.tsx",
    "domain": "admin",
    "description": "Tableau studio booking history du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/BookingStatusChip",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/studios"
    ]
  },
  {
    "name": "StudioDetailHeader",
    "source": "components/admin/StudioDetailHeader.tsx",
    "domain": "admin",
    "description": "Élément de navigation studio detail header du domaine admin.",
    "status": "extracted",
    "replacement": "PageHeader",
    "dependencies": [
      "@/components/admin/StudioDetailTabs",
      "@/i18n/navigation"
    ]
  },
  {
    "name": "StudioDetailTabs",
    "source": "components/admin/StudioDetailTabs.tsx",
    "domain": "admin",
    "description": "Composant studio detail tabs du domaine admin.",
    "status": "extracted",
    "replacement": "LinkTabs",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "StudiosTable",
    "source": "components/admin/StudiosTable.tsx",
    "domain": "admin",
    "description": "Tableau studios du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/studios"
    ]
  },
  {
    "name": "UserBookingHistoryTable",
    "source": "components/admin/UserBookingHistoryTable.tsx",
    "domain": "admin",
    "description": "Tableau user booking history du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/BookingStatusChip",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UserDataPanel",
    "source": "components/admin/UserDataPanel.tsx",
    "domain": "admin",
    "description": "Panneau user data du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/RoleChip",
      "@/components/revenue/Card",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UserDetailHeader",
    "source": "components/admin/UserDetailHeader.tsx",
    "domain": "admin",
    "description": "Élément de navigation user detail header du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/UserDetailTabs",
      "@/i18n/navigation",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UserDetailTabs",
    "source": "components/admin/UserDetailTabs.tsx",
    "domain": "admin",
    "description": "Composant user detail tabs du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UserInvoiceHistoryTable",
    "source": "components/admin/UserInvoiceHistoryTable.tsx",
    "domain": "admin",
    "description": "Tableau user invoice history du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/lib/invoices/invoice",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UserStudiosManager",
    "source": "components/admin/UserStudiosManager.tsx",
    "domain": "admin",
    "description": "Composant user studios manager du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/actions/admin/studios",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/services/admin/users"
    ]
  },
  {
    "name": "UsersTable",
    "source": "components/admin/UsersTable.tsx",
    "domain": "admin",
    "description": "Tableau users du domaine admin.",
    "status": "product",
    "dependencies": [
      "@/components/admin/RoleChip",
      "@/components/revenue/Card",
      "@/i18n/navigation",
      "@/services/admin/users"
    ]
  },
  {
    "name": "AuthVisualPanel",
    "source": "components/auth/AuthVisualPanel.tsx",
    "domain": "auth",
    "description": "Panneau auth visual du domaine auth.",
    "status": "extracted",
    "replacement": "AuthVisualPanel",
    "dependencies": [
      "@/components/ui/Logo"
    ]
  },
  {
    "name": "ForgotPasswordForm",
    "source": "components/auth/ForgotPasswordForm.tsx",
    "domain": "auth",
    "description": "Formulaire forgot password du domaine auth.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/requestPasswordReset",
      "@/components/ui/Button",
      "@/components/ui/Field",
      "@/components/ui/Input",
      "next-intl"
    ]
  },
  {
    "name": "GoogleAuthForm",
    "source": "components/auth/GoogleAuthForm.tsx",
    "domain": "auth",
    "description": "Formulaire google auth du domaine auth.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/google",
      "@/components/auth/GoogleButton"
    ]
  },
  {
    "name": "GoogleButton",
    "source": "components/auth/GoogleButton.tsx",
    "domain": "auth",
    "description": "Action google du domaine auth.",
    "status": "extracted",
    "replacement": "Button + GoogleIcon",
    "dependencies": [
      "@/components/icons"
    ]
  },
  {
    "name": "ResetPasswordForm",
    "source": "components/auth/ResetPasswordForm.tsx",
    "domain": "auth",
    "description": "Formulaire reset password du domaine auth.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/resetPassword",
      "@/components/ui/Button",
      "@/components/ui/Field",
      "@/components/ui/Input",
      "next-intl"
    ]
  },
  {
    "name": "SigninForm",
    "source": "components/auth/SigninForm.tsx",
    "domain": "auth",
    "description": "Formulaire signin du domaine auth.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/signin",
      "@/components/ui/Button",
      "@/components/ui/Field",
      "@/components/ui/Input",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "SignupForm",
    "source": "components/auth/SignupForm.tsx",
    "domain": "auth",
    "description": "Formulaire signup du domaine auth.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/signup",
      "@/components/ui/Button",
      "@/components/ui/Checkbox",
      "@/components/ui/Field",
      "@/components/ui/Input",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ActionButton",
    "source": "components/bookings/ActionButton.tsx",
    "domain": "bookings",
    "description": "Action action du domaine bookings.",
    "status": "extracted",
    "replacement": "Button / LinkButton",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "BookingAvatar",
    "source": "components/bookings/BookingAvatar.tsx",
    "domain": "bookings",
    "description": "Composant booking avatar du domaine bookings.",
    "status": "extracted",
    "replacement": "Avatar",
    "dependencies": []
  },
  {
    "name": "BookingCard",
    "source": "components/bookings/BookingCard.tsx",
    "domain": "bookings",
    "description": "Carte booking réutilisée dans le domaine bookings.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/bookings",
      "next-intl"
    ]
  },
  {
    "name": "BookingChip",
    "source": "components/bookings/BookingChip.tsx",
    "domain": "bookings",
    "description": "Indicateur booking chip du domaine bookings.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "BookingDetailCard",
    "source": "components/bookings/BookingDetailCard.tsx",
    "domain": "bookings",
    "description": "Carte booking detail réutilisée dans le domaine bookings.",
    "status": "extracted",
    "replacement": "DetailCard",
    "dependencies": []
  },
  {
    "name": "BookingDetailView",
    "source": "components/bookings/BookingDetailView.tsx",
    "domain": "bookings",
    "description": "Vue assemblée booking detail du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/components/bookings/PhotoCarousel",
      "@/components/favorites/FavoriteButton",
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/bookings",
      "next-intl"
    ]
  },
  {
    "name": "BookingField",
    "source": "components/bookings/BookingField.tsx",
    "domain": "bookings",
    "description": "Composant booking field du domaine bookings.",
    "status": "extracted",
    "replacement": "BookingField",
    "dependencies": []
  },
  {
    "name": "BookingKV",
    "source": "components/bookings/BookingKV.tsx",
    "domain": "bookings",
    "description": "Composant booking kv du domaine bookings.",
    "status": "extracted",
    "replacement": "KeyValue",
    "dependencies": []
  },
  {
    "name": "BookingStepper",
    "source": "components/bookings/BookingStepper.tsx",
    "domain": "bookings",
    "description": "Composant booking stepper du domaine bookings.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "BookingWizard",
    "source": "components/bookings/BookingWizard.tsx",
    "domain": "bookings",
    "description": "Composant booking wizard du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/components/bookings/BookingStepper",
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/booking",
      "next-intl"
    ]
  },
  {
    "name": "BookingsEmptyState",
    "source": "components/bookings/BookingsEmptyState.tsx",
    "domain": "bookings",
    "description": "État vide bookings empty state du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "BookingsSection",
    "source": "components/bookings/BookingsSection.tsx",
    "domain": "bookings",
    "description": "Composant bookings section du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/components/bookings/BookingCard",
      "@/services/bookings"
    ]
  },
  {
    "name": "CheckoutForm",
    "source": "components/bookings/CheckoutForm.tsx",
    "domain": "bookings",
    "description": "Formulaire checkout du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/actions/bookings/authorize",
      "@/components/icons",
      "@/services/booking",
      "@stripe/react-stripe-js",
      "next-intl",
      "next/navigation"
    ]
  },
  {
    "name": "ConfirmationStep",
    "source": "components/bookings/ConfirmationStep.tsx",
    "domain": "bookings",
    "description": "Composant confirmation step du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/components/bookings/BookingStepper",
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "PaymentStep",
    "source": "components/bookings/PaymentStep.tsx",
    "domain": "bookings",
    "description": "Composant payment step du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/actions/bookings/initPayment",
      "@/components/bookings/BookingStepper",
      "@/i18n/navigation",
      "@/services/booking",
      "@stripe/react-stripe-js",
      "@stripe/stripe-js",
      "next-intl",
      "next/navigation"
    ]
  },
  {
    "name": "PhotoCarousel",
    "source": "components/bookings/PhotoCarousel.tsx",
    "domain": "bookings",
    "description": "Composant média photo carousel du domaine bookings.",
    "status": "product",
    "dependencies": [
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "SummaryLine",
    "source": "components/bookings/SummaryLine.tsx",
    "domain": "bookings",
    "description": "Composant summary line du domaine bookings.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ContactForm",
    "source": "components/contact/ContactForm.tsx",
    "domain": "contact",
    "description": "Formulaire contact du domaine contact.",
    "status": "product",
    "dependencies": [
      "@/components/ui/Input",
      "next-intl"
    ]
  },
  {
    "name": "ActionBanner",
    "source": "components/dashboard/ActionBanner.tsx",
    "domain": "dashboard",
    "description": "Composant action banner du domaine dashboard.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "Card",
    "source": "components/dashboard/Card.tsx",
    "domain": "dashboard",
    "description": "Carte card réutilisée dans le domaine dashboard.",
    "status": "extracted",
    "replacement": "Card",
    "dependencies": []
  },
  {
    "name": "DashboardView",
    "source": "components/dashboard/DashboardView.tsx",
    "domain": "dashboard",
    "description": "Vue assemblée dashboard du domaine dashboard.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "@/services/dashboard",
      "next-intl"
    ]
  },
  {
    "name": "Kpi",
    "source": "components/dashboard/Kpi.tsx",
    "domain": "dashboard",
    "description": "Composant kpi du domaine dashboard.",
    "status": "extracted",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "Onboarding",
    "source": "components/dashboard/Onboarding.tsx",
    "domain": "dashboard",
    "description": "Composant onboarding du domaine dashboard.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/dashboard",
      "next-intl"
    ]
  },
  {
    "name": "RequestRow",
    "source": "components/dashboard/RequestRow.tsx",
    "domain": "dashboard",
    "description": "Ligne request du domaine dashboard.",
    "status": "product",
    "dependencies": [
      "@/services/bookings"
    ]
  },
  {
    "name": "RevenueCard",
    "source": "components/dashboard/RevenueCard.tsx",
    "domain": "dashboard",
    "description": "Carte revenue réutilisée dans le domaine dashboard.",
    "status": "product",
    "dependencies": [
      "@/services/dashboard",
      "next-intl"
    ]
  },
  {
    "name": "SectionHead",
    "source": "components/dashboard/SectionHead.tsx",
    "domain": "dashboard",
    "description": "Composant section head du domaine dashboard.",
    "status": "extracted",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "CityStudiosSection",
    "source": "components/explore/CityStudiosSection.tsx",
    "domain": "explore",
    "description": "Composant city studios section du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/home/StudioCard",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ExploreHero",
    "source": "components/explore/ExploreHero.tsx",
    "domain": "explore",
    "description": "Composant explore hero du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/explore/ExploreSearchBar",
      "next-intl"
    ]
  },
  {
    "name": "ExploreSearchBar",
    "source": "components/explore/ExploreSearchBar.tsx",
    "domain": "explore",
    "description": "Composant explore search bar du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/routing",
      "@/lib/dates",
      "@/lib/marketAreas",
      "next-intl/server"
    ]
  },
  {
    "name": "ExploreTopBar",
    "source": "components/explore/ExploreTopBar.tsx",
    "domain": "explore",
    "description": "Élément de navigation explore top bar du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/explore/ExploreSearchBar",
      "@/components/explore/FiltersDrawer",
      "@/components/ui/Logo",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "FeaturedProsSection",
    "source": "components/explore/FeaturedProsSection.tsx",
    "domain": "explore",
    "description": "Composant featured pros section du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/home/StudioCard",
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "FilterChips",
    "source": "components/explore/FilterChips.tsx",
    "domain": "explore",
    "description": "Composant filter chips du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "FiltersDrawer",
    "source": "components/explore/FiltersDrawer.tsx",
    "domain": "explore",
    "description": "Composant filters drawer du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "InteractiveMap",
    "source": "components/explore/InteractiveMap.tsx",
    "domain": "explore",
    "description": "Composant cartographique interactive map du domaine explore.",
    "status": "product",
    "dependencies": [
      "maplibre-gl",
      "next-intl"
    ]
  },
  {
    "name": "MapPanel",
    "source": "components/explore/MapPanel.tsx",
    "domain": "explore",
    "description": "Panneau map du domaine explore.",
    "status": "product",
    "dependencies": [
      "@/components/explore/InteractiveMap",
      "next-intl"
    ]
  },
  {
    "name": "PageButton",
    "source": "components/explore/PageButton.tsx",
    "domain": "explore",
    "description": "Action page du domaine explore.",
    "status": "extracted",
    "replacement": "Pagination",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "Pagination",
    "source": "components/explore/Pagination.tsx",
    "domain": "explore",
    "description": "Composant pagination du domaine explore.",
    "status": "extracted",
    "dependencies": [
      "next-intl"
    ]
  },
  {
    "name": "CityChip",
    "source": "components/favorites/CityChip.tsx",
    "domain": "favorites",
    "description": "Indicateur city chip du domaine favorites.",
    "status": "extracted",
    "replacement": "ChoiceChip",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "FavoriteButton",
    "source": "components/favorites/FavoriteButton.tsx",
    "domain": "favorites",
    "description": "Action favorite du domaine favorites.",
    "status": "product",
    "dependencies": [
      "@/actions/favorites/toggleFavorite",
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "FavoriteStudioCard",
    "source": "components/favorites/FavoriteStudioCard.tsx",
    "domain": "favorites",
    "description": "Carte favorite studio réutilisée dans le domaine favorites.",
    "status": "product",
    "dependencies": [
      "@/components/favorites/FavoriteButton",
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/favorites",
      "next-intl"
    ]
  },
  {
    "name": "FavoritesEmptyState",
    "source": "components/favorites/FavoritesEmptyState.tsx",
    "domain": "favorites",
    "description": "État vide favorites empty state du domaine favorites.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "CityStudioRow",
    "source": "components/home/CityStudioRow.tsx",
    "domain": "home",
    "description": "Ligne city studio du domaine home.",
    "status": "product",
    "dependencies": [
      "@/components/home/StudioCard",
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "Hero",
    "source": "components/home/Hero.tsx",
    "domain": "home",
    "description": "Composant hero du domaine home.",
    "status": "product",
    "dependencies": [
      "@/components/explore/ExploreSearchBar",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "HostCta",
    "source": "components/home/HostCta.tsx",
    "domain": "home",
    "description": "Composant host cta du domaine home.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "HowItWorks",
    "source": "components/home/HowItWorks.tsx",
    "domain": "home",
    "description": "Composant how it works du domaine home.",
    "status": "product",
    "dependencies": [
      "next-intl"
    ]
  },
  {
    "name": "StudioCard",
    "source": "components/home/StudioCard.tsx",
    "domain": "home",
    "description": "Carte studio réutilisée dans le domaine home.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl",
      "next/image"
    ]
  },
  {
    "name": "StudioTypes",
    "source": "components/home/StudioTypes.tsx",
    "domain": "home",
    "description": "Composant studio types du domaine home.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "TrustStrip",
    "source": "components/home/TrustStrip.tsx",
    "domain": "home",
    "description": "Composant trust strip du domaine home.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "AddressAutocomplete",
    "source": "components/host/AddressAutocomplete.tsx",
    "domain": "host",
    "description": "Composant address autocomplete du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/ui/Input"
    ]
  },
  {
    "name": "AvailabilityDayRow",
    "source": "components/host/AvailabilityDayRow.tsx",
    "domain": "host",
    "description": "Ligne availability day du domaine host.",
    "status": "product",
    "dependencies": [
      "@/actions/availability/manage",
      "@/components/icons",
      "@/services/availability",
      "next-intl"
    ]
  },
  {
    "name": "BookingRequestAvatar",
    "source": "components/host/BookingRequestAvatar.tsx",
    "domain": "host",
    "description": "Composant booking request avatar du domaine host.",
    "status": "extracted",
    "replacement": "Avatar",
    "dependencies": []
  },
  {
    "name": "BookingRequestCard",
    "source": "components/host/BookingRequestCard.tsx",
    "domain": "host",
    "description": "Carte booking request réutilisée dans le domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/bookings"
    ]
  },
  {
    "name": "BookingRequestDetail",
    "source": "components/host/BookingRequestDetail.tsx",
    "domain": "host",
    "description": "Composant booking request detail du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/bookings/BookingKV",
      "@/components/icons",
      "@/components/ui/SubmitButton",
      "@/i18n/navigation",
      "@/services/bookings",
      "next-intl"
    ]
  },
  {
    "name": "DeleteStudioForm",
    "source": "components/host/DeleteStudioForm.tsx",
    "domain": "host",
    "description": "Formulaire delete studio du domaine host.",
    "status": "product",
    "dependencies": [
      "@/actions/studio/delete",
      "next-intl"
    ]
  },
  {
    "name": "FormCard",
    "source": "components/host/FormCard.tsx",
    "domain": "host",
    "description": "Carte form réutilisée dans le domaine host.",
    "status": "extracted",
    "replacement": "FormCard",
    "dependencies": []
  },
  {
    "name": "RequestClientAvatar",
    "source": "components/host/RequestClientAvatar.tsx",
    "domain": "host",
    "description": "Composant request client avatar du domaine host.",
    "status": "extracted",
    "replacement": "Avatar",
    "dependencies": []
  },
  {
    "name": "RequestDetailCard",
    "source": "components/host/RequestDetailCard.tsx",
    "domain": "host",
    "description": "Carte request detail réutilisée dans le domaine host.",
    "status": "extracted",
    "replacement": "DetailCard",
    "dependencies": []
  },
  {
    "name": "ReservationTab",
    "source": "components/host/ReservationTab.tsx",
    "domain": "host",
    "description": "Composant reservation tab du domaine host.",
    "status": "extracted",
    "replacement": "LinkTabs",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "ReservationsEmptyState",
    "source": "components/host/ReservationsEmptyState.tsx",
    "domain": "host",
    "description": "État vide reservations empty state du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "ReservationsList",
    "source": "components/host/ReservationsList.tsx",
    "domain": "host",
    "description": "Composant reservations list du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/host/BookingRequestCard",
      "@/services/bookings"
    ]
  },
  {
    "name": "SortablePhotoThumb",
    "source": "components/host/SortablePhotoThumb.tsx",
    "domain": "host",
    "description": "Composant média sortable photo thumb du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "next/image"
    ]
  },
  {
    "name": "StudioEditForm",
    "source": "components/host/StudioEditForm.tsx",
    "domain": "host",
    "description": "Formulaire studio edit du domaine host.",
    "status": "product",
    "dependencies": [
      "@/actions/studio/upsertFull",
      "@/components/home/StudioCard",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/NativeSelect",
      "@/components/ui/Toast",
      "@/i18n/navigation",
      "@/lib/pricing",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudioKpi",
    "source": "components/host/StudioKpi.tsx",
    "domain": "host",
    "description": "Composant studio kpi du domaine host.",
    "status": "extracted",
    "replacement": "Metric",
    "dependencies": []
  },
  {
    "name": "StudioListItem",
    "source": "components/host/StudioListItem.tsx",
    "domain": "host",
    "description": "Composant studio list item du domaine host.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudioPhotosUploader",
    "source": "components/host/StudioPhotosUploader.tsx",
    "domain": "host",
    "description": "Composant média studio photos uploader du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "next-intl"
    ]
  },
  {
    "name": "StudioStatusBadge",
    "source": "components/host/StudioStatusBadge.tsx",
    "domain": "host",
    "description": "Indicateur studio status badge du domaine host.",
    "status": "product",
    "dependencies": [
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudiosEmptyState",
    "source": "components/host/StudiosEmptyState.tsx",
    "domain": "host",
    "description": "État vide studios empty state du domaine host.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ArrowDownIcon",
    "source": "components/icons/ArrowDownIcon.tsx",
    "domain": "icons",
    "description": "Icône arrow down.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ArrowLeftIcon",
    "source": "components/icons/ArrowLeftIcon.tsx",
    "domain": "icons",
    "description": "Icône arrow left.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ArrowRightIcon",
    "source": "components/icons/ArrowRightIcon.tsx",
    "domain": "icons",
    "description": "Icône arrow right.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ArrowUpIcon",
    "source": "components/icons/ArrowUpIcon.tsx",
    "domain": "icons",
    "description": "Icône arrow up.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ArrowUpRightIcon",
    "source": "components/icons/ArrowUpRightIcon.tsx",
    "domain": "icons",
    "description": "Icône arrow up right.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "AudioLinesIcon",
    "source": "components/icons/AudioLinesIcon.tsx",
    "domain": "icons",
    "description": "Icône audio lines.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "BarChart3Icon",
    "source": "components/icons/BarChart3Icon.tsx",
    "domain": "icons",
    "description": "Icône bar chart3.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "BellIcon",
    "source": "components/icons/BellIcon.tsx",
    "domain": "icons",
    "description": "Icône bell.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CalendarDaysIcon",
    "source": "components/icons/CalendarDaysIcon.tsx",
    "domain": "icons",
    "description": "Icône calendar days.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CameraIcon",
    "source": "components/icons/CameraIcon.tsx",
    "domain": "icons",
    "description": "Icône camera.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CheckCheckIcon",
    "source": "components/icons/CheckCheckIcon.tsx",
    "domain": "icons",
    "description": "Icône check check.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CheckIcon",
    "source": "components/icons/CheckIcon.tsx",
    "domain": "icons",
    "description": "Icône check.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ChevronDownIcon",
    "source": "components/icons/ChevronDownIcon.tsx",
    "domain": "icons",
    "description": "Icône chevron down.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CircleHelpIcon",
    "source": "components/icons/CircleHelpIcon.tsx",
    "domain": "icons",
    "description": "Icône circle help.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ClipboardIcon",
    "source": "components/icons/ClipboardIcon.tsx",
    "domain": "icons",
    "description": "Icône clipboard.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ClockIcon",
    "source": "components/icons/ClockIcon.tsx",
    "domain": "icons",
    "description": "Icône clock.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CompassIcon",
    "source": "components/icons/CompassIcon.tsx",
    "domain": "icons",
    "description": "Icône compass.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "CreditCardIcon",
    "source": "components/icons/CreditCardIcon.tsx",
    "domain": "icons",
    "description": "Icône credit card.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "EyeIcon",
    "source": "components/icons/EyeIcon.tsx",
    "domain": "icons",
    "description": "Icône eye.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "FileTextIcon",
    "source": "components/icons/FileTextIcon.tsx",
    "domain": "icons",
    "description": "Icône file text.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "GiftIcon",
    "source": "components/icons/GiftIcon.tsx",
    "domain": "icons",
    "description": "Icône gift.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "GlobeIcon",
    "source": "components/icons/GlobeIcon.tsx",
    "domain": "icons",
    "description": "Icône globe.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "GoogleIcon",
    "source": "components/icons/GoogleIcon.tsx",
    "domain": "icons",
    "description": "Icône google.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "GuitarIcon",
    "source": "components/icons/GuitarIcon.tsx",
    "domain": "icons",
    "description": "Icône guitar.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "HeadphonesIcon",
    "source": "components/icons/HeadphonesIcon.tsx",
    "domain": "icons",
    "description": "Icône headphones.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "HeartIcon",
    "source": "components/icons/HeartIcon.tsx",
    "domain": "icons",
    "description": "Icône heart.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "HourglassIcon",
    "source": "components/icons/HourglassIcon.tsx",
    "domain": "icons",
    "description": "Icône hourglass.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "HouseIcon",
    "source": "components/icons/HouseIcon.tsx",
    "domain": "icons",
    "description": "Icône house.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "InstagramIcon",
    "source": "components/icons/InstagramIcon.tsx",
    "domain": "icons",
    "description": "Icône instagram.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "LaptopIcon",
    "source": "components/icons/LaptopIcon.tsx",
    "domain": "icons",
    "description": "Icône laptop.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "LightbulbIcon",
    "source": "components/icons/LightbulbIcon.tsx",
    "domain": "icons",
    "description": "Icône lightbulb.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "LockIcon",
    "source": "components/icons/LockIcon.tsx",
    "domain": "icons",
    "description": "Icône lock.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "LogOutIcon",
    "source": "components/icons/LogOutIcon.tsx",
    "domain": "icons",
    "description": "Icône log out.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MailIcon",
    "source": "components/icons/MailIcon.tsx",
    "domain": "icons",
    "description": "Icône mail.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MapPinIcon",
    "source": "components/icons/MapPinIcon.tsx",
    "domain": "icons",
    "description": "Icône map pin.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MenuIcon",
    "source": "components/icons/MenuIcon.tsx",
    "domain": "icons",
    "description": "Icône menu.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MessageCircleIcon",
    "source": "components/icons/MessageCircleIcon.tsx",
    "domain": "icons",
    "description": "Icône message circle.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MicIcon",
    "source": "components/icons/MicIcon.tsx",
    "domain": "icons",
    "description": "Icône mic.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "MonitorIcon",
    "source": "components/icons/MonitorIcon.tsx",
    "domain": "icons",
    "description": "Icône monitor.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "PartyPopperIcon",
    "source": "components/icons/PartyPopperIcon.tsx",
    "domain": "icons",
    "description": "Icône party popper.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "PianoIcon",
    "source": "components/icons/PianoIcon.tsx",
    "domain": "icons",
    "description": "Icône piano.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "PlayIcon",
    "source": "components/icons/PlayIcon.tsx",
    "domain": "icons",
    "description": "Icône play.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "PlusIcon",
    "source": "components/icons/PlusIcon.tsx",
    "domain": "icons",
    "description": "Icône plus.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "PuzzleIcon",
    "source": "components/icons/PuzzleIcon.tsx",
    "domain": "icons",
    "description": "Icône puzzle.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ReceiptTextIcon",
    "source": "components/icons/ReceiptTextIcon.tsx",
    "domain": "icons",
    "description": "Icône receipt text.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SaveIcon",
    "source": "components/icons/SaveIcon.tsx",
    "domain": "icons",
    "description": "Icône save.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SearchIcon",
    "source": "components/icons/SearchIcon.tsx",
    "domain": "icons",
    "description": "Icône search.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SettingsIcon",
    "source": "components/icons/SettingsIcon.tsx",
    "domain": "icons",
    "description": "Icône settings.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ShieldCheckIcon",
    "source": "components/icons/ShieldCheckIcon.tsx",
    "domain": "icons",
    "description": "Icône shield check.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SignalIcon",
    "source": "components/icons/SignalIcon.tsx",
    "domain": "icons",
    "description": "Icône signal.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SlidersHorizontalIcon",
    "source": "components/icons/SlidersHorizontalIcon.tsx",
    "domain": "icons",
    "description": "Icône sliders horizontal.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SlidersVerticalIcon",
    "source": "components/icons/SlidersVerticalIcon.tsx",
    "domain": "icons",
    "description": "Icône sliders vertical.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "SmartphoneIcon",
    "source": "components/icons/SmartphoneIcon.tsx",
    "domain": "icons",
    "description": "Icône smartphone.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "StarIcon",
    "source": "components/icons/StarIcon.tsx",
    "domain": "icons",
    "description": "Icône star.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ThermometerIcon",
    "source": "components/icons/ThermometerIcon.tsx",
    "domain": "icons",
    "description": "Icône thermometer.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "TrendingUpIcon",
    "source": "components/icons/TrendingUpIcon.tsx",
    "domain": "icons",
    "description": "Icône trending up.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "TriangleAlertIcon",
    "source": "components/icons/TriangleAlertIcon.tsx",
    "domain": "icons",
    "description": "Icône triangle alert.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "UserIcon",
    "source": "components/icons/UserIcon.tsx",
    "domain": "icons",
    "description": "Icône user.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Volume2Icon",
    "source": "components/icons/Volume2Icon.tsx",
    "domain": "icons",
    "description": "Icône volume2.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "WalletIcon",
    "source": "components/icons/WalletIcon.tsx",
    "domain": "icons",
    "description": "Icône wallet.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "WrenchIcon",
    "source": "components/icons/WrenchIcon.tsx",
    "domain": "icons",
    "description": "Icône wrench.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "XIcon",
    "source": "components/icons/XIcon.tsx",
    "domain": "icons",
    "description": "Icône x.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "XSocialIcon",
    "source": "components/icons/XSocialIcon.tsx",
    "domain": "icons",
    "description": "Icône x social.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "YoutubeIcon",
    "source": "components/icons/YoutubeIcon.tsx",
    "domain": "icons",
    "description": "Icône youtube.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ZapIcon",
    "source": "components/icons/ZapIcon.tsx",
    "domain": "icons",
    "description": "Icône zap.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "InvoiceDocument",
    "source": "components/invoices/InvoiceDocument.tsx",
    "domain": "invoices",
    "description": "Composant invoice document du domaine invoices.",
    "status": "product",
    "dependencies": [
      "@/lib/invoices/invoice",
      "@react-pdf/renderer"
    ]
  },
  {
    "name": "ConnectedNav",
    "source": "components/layout/ConnectedNav.tsx",
    "domain": "layout",
    "description": "Élément de navigation connected nav du domaine layout.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/components/layout/LanguageSwitcher",
      "@/components/layout/NavLink",
      "@/components/layout/NavMobileMenu",
      "@/components/ui/Logo",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ErrorPageContent",
    "source": "components/layout/ErrorPageContent.tsx",
    "domain": "layout",
    "description": "Composant error page content du domaine layout.",
    "status": "extracted",
    "replacement": "ErrorState",
    "dependencies": [
      "@/components/ui/Button",
      "@/i18n/navigation"
    ]
  },
  {
    "name": "HeaderIconButton",
    "source": "components/layout/HeaderIconButton.tsx",
    "domain": "layout",
    "description": "Action header icon du domaine layout.",
    "status": "extracted",
    "replacement": "IconButton",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "LanguageSwitcher",
    "source": "components/layout/LanguageSwitcher.tsx",
    "domain": "layout",
    "description": "Composant language switcher du domaine layout.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "@/i18n/routing",
      "next-intl"
    ]
  },
  {
    "name": "NavLink",
    "source": "components/layout/NavLink.tsx",
    "domain": "layout",
    "description": "Élément de navigation nav link du domaine layout.",
    "status": "extracted",
    "replacement": "NavigationList",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "NavMobileMenu",
    "source": "components/layout/NavMobileMenu.tsx",
    "domain": "layout",
    "description": "Élément de navigation nav mobile menu du domaine layout.",
    "status": "extracted",
    "replacement": "MobileNavigation",
    "dependencies": [
      "@/components/icons",
      "@/components/layout/NavLink"
    ]
  },
  {
    "name": "PublicNav",
    "source": "components/layout/PublicNav.tsx",
    "domain": "layout",
    "description": "Élément de navigation public nav du domaine layout.",
    "status": "product",
    "dependencies": [
      "@/components/layout/LanguageSwitcher",
      "@/components/layout/NavLink",
      "@/components/layout/NavMobileMenu",
      "@/components/ui/Logo",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "SiteFooter",
    "source": "components/layout/SiteFooter.tsx",
    "domain": "layout",
    "description": "Composant site footer du domaine layout.",
    "status": "product",
    "dependencies": [
      "@/components/ui/Logo",
      "@/i18n/navigation",
      "@/services/profile",
      "next-intl/server"
    ]
  },
  {
    "name": "SiteHeader",
    "source": "components/layout/SiteHeader.tsx",
    "domain": "layout",
    "description": "Élément de navigation site header du domaine layout.",
    "status": "product",
    "dependencies": [
      "@/components/layout/SiteHeaderShell",
      "@/components/messages/RealtimeRefresher",
      "@/lib/auth/admins",
      "@/lib/auth/getCurrentUser",
      "@/services/messages",
      "@/services/notifications"
    ]
  },
  {
    "name": "SiteHeaderShell",
    "source": "components/layout/SiteHeaderShell.tsx",
    "domain": "layout",
    "description": "Élément de navigation site header shell du domaine layout.",
    "status": "extracted",
    "replacement": "SiteHeader",
    "dependencies": []
  },
  {
    "name": "LegalBlock",
    "source": "components/legal/LegalBlock.tsx",
    "domain": "legal",
    "description": "Composant legal block du domaine legal.",
    "status": "extracted",
    "replacement": "ContentBlock",
    "dependencies": []
  },
  {
    "name": "LegalDocument",
    "source": "components/legal/LegalDocument.tsx",
    "domain": "legal",
    "description": "Composant legal document du domaine legal.",
    "status": "product",
    "dependencies": []
  },
  {
    "name": "AboutContent",
    "source": "components/marketing/AboutContent.tsx",
    "domain": "marketing",
    "description": "Composant about content du domaine marketing.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "FaqAccordion",
    "source": "components/marketing/FaqAccordion.tsx",
    "domain": "marketing",
    "description": "Composant faq accordion du domaine marketing.",
    "status": "extracted",
    "replacement": "Accordion",
    "dependencies": []
  },
  {
    "name": "FaqJsonLd",
    "source": "components/marketing/FaqJsonLd.tsx",
    "domain": "marketing",
    "description": "Composant faq json ld du domaine marketing.",
    "status": "product",
    "dependencies": [
      "@/components/marketing/FaqAccordion"
    ]
  },
  {
    "name": "StudioPitch",
    "source": "components/marketing/StudioPitch.tsx",
    "domain": "marketing",
    "description": "Composant studio pitch du domaine marketing.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ChatThread",
    "source": "components/messages/ChatThread.tsx",
    "domain": "messages",
    "description": "Composant chat thread du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/components/messages/EmbeddedBookingCard",
      "@/components/messages/MessageComposer",
      "@/components/messages/ScrollToLatest",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "ConversationsList",
    "source": "components/messages/ConversationsList.tsx",
    "domain": "messages",
    "description": "Composant conversations list du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "EmbeddedBookingCard",
    "source": "components/messages/EmbeddedBookingCard.tsx",
    "domain": "messages",
    "description": "Carte embedded booking réutilisée dans le domaine messages.",
    "status": "extracted",
    "replacement": "EmbeddedBookingCard",
    "dependencies": []
  },
  {
    "name": "EmptyMessagesState",
    "source": "components/messages/EmptyMessagesState.tsx",
    "domain": "messages",
    "description": "Composant empty messages state du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "MessageComposer",
    "source": "components/messages/MessageComposer.tsx",
    "domain": "messages",
    "description": "Composant message composer du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "NoActiveConversationState",
    "source": "components/messages/NoActiveConversationState.tsx",
    "domain": "messages",
    "description": "État vide no active conversation state du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "RealtimeRefresher",
    "source": "components/messages/RealtimeRefresher.tsx",
    "domain": "messages",
    "description": "Composant realtime refresher du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/actions/notifications/manage",
      "@/components/icons",
      "@/i18n/navigation",
      "@/lib/supabase/client",
      "next/navigation"
    ]
  },
  {
    "name": "ScrollToLatest",
    "source": "components/messages/ScrollToLatest.tsx",
    "domain": "messages",
    "description": "Composant scroll to latest du domaine messages.",
    "status": "extracted",
    "replacement": "ScrollAnchor",
    "dependencies": []
  },
  {
    "name": "StudioContextPanel",
    "source": "components/messages/StudioContextPanel.tsx",
    "domain": "messages",
    "description": "Panneau studio context du domaine messages.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "@/services/messages",
      "next-intl"
    ]
  },
  {
    "name": "NotificationCard",
    "source": "components/notifications/NotificationCard.tsx",
    "domain": "notifications",
    "description": "Carte notification réutilisée dans le domaine notifications.",
    "status": "extracted",
    "dependencies": [
      "@/actions/notifications/manage",
      "@/components/icons",
      "@/services/notifications",
      "next-intl"
    ]
  },
  {
    "name": "ProEditForm",
    "source": "components/pro/ProEditForm.tsx",
    "domain": "pro",
    "description": "Formulaire pro edit du domaine pro.",
    "status": "product",
    "dependencies": [
      "@/actions/pro/upsertProfile",
      "@/components/host/FormCard",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/NativeSelect",
      "@/components/ui/Toast",
      "@/i18n/navigation",
      "@/services/pro",
      "next-intl"
    ]
  },
  {
    "name": "AddCardForm",
    "source": "components/profile/AddCardForm.tsx",
    "domain": "profile",
    "description": "Formulaire add card du domaine profile.",
    "status": "product",
    "dependencies": [
      "@stripe/react-stripe-js",
      "next-intl"
    ]
  },
  {
    "name": "ArtistNotificationsForm",
    "source": "components/profile/ArtistNotificationsForm.tsx",
    "domain": "profile",
    "description": "Formulaire artist notifications du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/artist/updateNotifications",
      "@/components/ui/Button",
      "@/components/ui/Toast",
      "@/types/artistNotifications",
      "next-intl"
    ]
  },
  {
    "name": "ArtistPaymentsPanel",
    "source": "components/profile/ArtistPaymentsPanel.tsx",
    "domain": "profile",
    "description": "Panneau artist payments du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/components/profile/PaymentMethodsManager",
      "@/services/paymentMethods",
      "next-intl"
    ]
  },
  {
    "name": "ArtistPreferencesForm",
    "source": "components/profile/ArtistPreferencesForm.tsx",
    "domain": "profile",
    "description": "Formulaire artist preferences du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/artist/updatePreferences",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/NativeSelect",
      "@/components/ui/Toast",
      "@/components/ui/Toggle",
      "@/services/artistPreferences",
      "next-intl"
    ]
  },
  {
    "name": "ArtistPrivacyForm",
    "source": "components/profile/ArtistPrivacyForm.tsx",
    "domain": "profile",
    "description": "Formulaire artist privacy du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/artist/updatePrivacy",
      "@/components/profile/DeleteAccountDialog",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Toast",
      "@/components/ui/Toggle",
      "@/services/artistPrivacy",
      "next-intl"
    ]
  },
  {
    "name": "ArtistSecurityPanel",
    "source": "components/profile/ArtistSecurityPanel.tsx",
    "domain": "profile",
    "description": "Panneau artist security du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/components/profile/PasswordChangeForm",
      "next-intl"
    ]
  },
  {
    "name": "CommissionCodeCard",
    "source": "components/profile/CommissionCodeCard.tsx",
    "domain": "profile",
    "description": "Carte commission code réutilisée dans le domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/studio/redeemCommissionCode",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/Toast",
      "@/services/commissionCodes",
      "next-intl"
    ]
  },
  {
    "name": "DataActionRow",
    "source": "components/profile/DataActionRow.tsx",
    "domain": "profile",
    "description": "Ligne data action du domaine profile.",
    "status": "product",
    "dependencies": [
      "next-intl"
    ]
  },
  {
    "name": "DeleteAccountDialog",
    "source": "components/profile/DeleteAccountDialog.tsx",
    "domain": "profile",
    "description": "Composant delete account dialog du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/deleteAccount",
      "@/components/ui/Input",
      "next-intl"
    ]
  },
  {
    "name": "MobileBackLink",
    "source": "components/profile/MobileBackLink.tsx",
    "domain": "profile",
    "description": "Composant mobile back link du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "MusicGenresField",
    "source": "components/profile/MusicGenresField.tsx",
    "domain": "profile",
    "description": "Composant music genres field du domaine profile.",
    "status": "product",
    "dependencies": [
      "next-intl"
    ]
  },
  {
    "name": "NotificationGroupCard",
    "source": "components/profile/NotificationGroupCard.tsx",
    "domain": "profile",
    "description": "Carte notification group réutilisée dans le domaine profile.",
    "status": "product",
    "dependencies": [
      "@/components/profile/Row",
      "@/components/ui/Toggle",
      "@/types/artistNotifications",
      "next-intl"
    ]
  },
  {
    "name": "PasswordChangeForm",
    "source": "components/profile/PasswordChangeForm.tsx",
    "domain": "profile",
    "description": "Formulaire password change du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/updatePassword",
      "@/components/ui/Button",
      "@/components/ui/Field",
      "@/components/ui/Input",
      "@/components/ui/Toast",
      "next-intl"
    ]
  },
  {
    "name": "PaymentHistoryRow",
    "source": "components/profile/PaymentHistoryRow.tsx",
    "domain": "profile",
    "description": "Ligne payment history du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/services/paymentMethods",
      "next-intl"
    ]
  },
  {
    "name": "PaymentMethodsManager",
    "source": "components/profile/PaymentMethodsManager.tsx",
    "domain": "profile",
    "description": "Composant payment methods manager du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/payments/manage",
      "@/services/paymentMethods",
      "@stripe/react-stripe-js",
      "@stripe/stripe-js",
      "next-intl",
      "next/navigation"
    ]
  },
  {
    "name": "ProfileForm",
    "source": "components/profile/ProfileForm.tsx",
    "domain": "profile",
    "description": "Formulaire profile du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/profile/update",
      "@/components/profile/MusicGenresField",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/Select",
      "@/components/ui/Toast",
      "next-intl"
    ]
  },
  {
    "name": "ProfileSectionCard",
    "source": "components/profile/ProfileSectionCard.tsx",
    "domain": "profile",
    "description": "Carte profile section réutilisée dans le domaine profile.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "ProfileSidebar",
    "source": "components/profile/ProfileSidebar.tsx",
    "domain": "profile",
    "description": "Élément de navigation profile sidebar du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/signout",
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "Row",
    "source": "components/profile/Row.tsx",
    "domain": "profile",
    "description": "Ligne row du domaine profile.",
    "status": "extracted",
    "replacement": "FormRow",
    "dependencies": []
  },
  {
    "name": "StatusPill",
    "source": "components/profile/StatusPill.tsx",
    "domain": "profile",
    "description": "Indicateur status pill du domaine profile.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "StudioLegalPanel",
    "source": "components/profile/StudioLegalPanel.tsx",
    "domain": "profile",
    "description": "Panneau studio legal du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/legal/update",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/NativeSelect",
      "@/components/ui/Toast",
      "@/lib/legal",
      "@/services/studioLegal",
      "next-intl"
    ]
  },
  {
    "name": "StudioPayoutsPanel",
    "source": "components/profile/StudioPayoutsPanel.tsx",
    "domain": "profile",
    "description": "Panneau studio payouts du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/payout/update",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/Input",
      "@/components/ui/Toast",
      "@/services/payout",
      "next-intl"
    ]
  },
  {
    "name": "StudioPreferencesForm",
    "source": "components/profile/StudioPreferencesForm.tsx",
    "domain": "profile",
    "description": "Formulaire studio preferences du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/studio/updatePreferences",
      "@/components/profile/Row",
      "@/components/ui/Button",
      "@/components/ui/NativeSelect",
      "@/components/ui/Toast",
      "@/services/studioPreferences",
      "next-intl"
    ]
  },
  {
    "name": "StudioSidebar",
    "source": "components/profile/StudioSidebar.tsx",
    "domain": "profile",
    "description": "Élément de navigation studio sidebar du domaine profile.",
    "status": "product",
    "dependencies": [
      "@/actions/auth/signout",
      "@/components/icons",
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "Card",
    "source": "components/revenue/Card.tsx",
    "domain": "revenue",
    "description": "Carte card réutilisée dans le domaine revenue.",
    "status": "extracted",
    "replacement": "Card",
    "dependencies": []
  },
  {
    "name": "ComparatorTable",
    "source": "components/revenue/ComparatorTable.tsx",
    "domain": "revenue",
    "description": "Tableau comparator du domaine revenue.",
    "status": "product",
    "dependencies": [
      "@/services/revenue",
      "next-intl"
    ]
  },
  {
    "name": "RevenueView",
    "source": "components/revenue/RevenueView.tsx",
    "domain": "revenue",
    "description": "Vue assemblée revenue du domaine revenue.",
    "status": "product",
    "dependencies": [
      "@/i18n/navigation",
      "@/services/revenue",
      "next-intl"
    ]
  },
  {
    "name": "StudioFilter",
    "source": "components/revenue/StudioFilter.tsx",
    "domain": "revenue",
    "description": "Composant studio filter du domaine revenue.",
    "status": "extracted",
    "replacement": "MenuSelect",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "TrendChip",
    "source": "components/revenue/TrendChip.tsx",
    "domain": "revenue",
    "description": "Indicateur trend chip du domaine revenue.",
    "status": "extracted",
    "dependencies": [
      "@/services/revenue"
    ]
  },
  {
    "name": "BookingCard",
    "source": "components/studios/BookingCard.tsx",
    "domain": "studios",
    "description": "Carte booking réutilisée dans le domaine studios.",
    "status": "extracted",
    "dependencies": [
      "@/i18n/navigation",
      "next-intl"
    ]
  },
  {
    "name": "LazyStudioLocationMap",
    "source": "components/studios/LazyStudioLocationMap.tsx",
    "domain": "studios",
    "description": "Composant cartographique lazy studio location map du domaine studios.",
    "status": "product",
    "dependencies": [
      "next/dynamic"
    ]
  },
  {
    "name": "PhotoBox",
    "source": "components/studios/PhotoBox.tsx",
    "domain": "studios",
    "description": "Composant média photo box du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/services/studio",
      "next/image"
    ]
  },
  {
    "name": "PhotoGallery",
    "source": "components/studios/PhotoGallery.tsx",
    "domain": "studios",
    "description": "Composant média photo gallery du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "PhotoLightbox",
    "source": "components/studios/PhotoLightbox.tsx",
    "domain": "studios",
    "description": "Composant média photo lightbox du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "ReviewCard",
    "source": "components/studios/ReviewCard.tsx",
    "domain": "studios",
    "description": "Carte review réutilisée dans le domaine studios.",
    "status": "extracted",
    "dependencies": [
      "@/services/studio",
      "next-intl",
      "next/image"
    ]
  },
  {
    "name": "StarRow",
    "source": "components/studios/StarRow.tsx",
    "domain": "studios",
    "description": "Ligne star du domaine studios.",
    "status": "extracted",
    "replacement": "RatingStars",
    "dependencies": [
      "@/components/icons"
    ]
  },
  {
    "name": "StudioEquipments",
    "source": "components/studios/StudioEquipments.tsx",
    "domain": "studios",
    "description": "Composant studio equipments du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudioHighlights",
    "source": "components/studios/StudioHighlights.tsx",
    "domain": "studios",
    "description": "Composant studio highlights du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudioJsonLd",
    "source": "components/studios/StudioJsonLd.tsx",
    "domain": "studios",
    "description": "Composant studio json ld du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/services/studio"
    ]
  },
  {
    "name": "StudioLocationMap",
    "source": "components/studios/StudioLocationMap.tsx",
    "domain": "studios",
    "description": "Composant cartographique studio location map du domaine studios.",
    "status": "product",
    "dependencies": [
      "maplibre-gl"
    ]
  },
  {
    "name": "StudioMap",
    "source": "components/studios/StudioMap.tsx",
    "domain": "studios",
    "description": "Composant cartographique studio map du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "next-intl"
    ]
  },
  {
    "name": "StudioReviews",
    "source": "components/studios/StudioReviews.tsx",
    "domain": "studios",
    "description": "Composant studio reviews du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "StudioReviewsModal",
    "source": "components/studios/StudioReviewsModal.tsx",
    "domain": "studios",
    "description": "Composant studio reviews modal du domaine studios.",
    "status": "product",
    "dependencies": [
      "@/components/icons",
      "@/components/ui/Modal",
      "@/services/studio",
      "next-intl"
    ]
  },
  {
    "name": "Button",
    "source": "components/ui/Button.tsx",
    "domain": "ui",
    "description": "Action button du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Checkbox",
    "source": "components/ui/Checkbox.tsx",
    "domain": "ui",
    "description": "Composant checkbox du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Divider",
    "source": "components/ui/Divider.tsx",
    "domain": "ui",
    "description": "Composant divider du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Field",
    "source": "components/ui/Field.tsx",
    "domain": "ui",
    "description": "Composant field du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Input",
    "source": "components/ui/Input.tsx",
    "domain": "ui",
    "description": "Composant input du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Logo",
    "source": "components/ui/Logo.tsx",
    "domain": "ui",
    "description": "Composant logo du domaine ui.",
    "status": "extracted",
    "dependencies": [
      "@/i18n/navigation"
    ]
  },
  {
    "name": "Modal",
    "source": "components/ui/Modal.tsx",
    "domain": "ui",
    "description": "Composant modal du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "NativeSelect",
    "source": "components/ui/NativeSelect.tsx",
    "domain": "ui",
    "description": "Composant native select du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "RoleBadge",
    "source": "components/ui/RoleBadge.tsx",
    "domain": "ui",
    "description": "Indicateur role badge du domaine ui.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons"
    ]
  },
  {
    "name": "RolePickerCard",
    "source": "components/ui/RolePickerCard.tsx",
    "domain": "ui",
    "description": "Carte role picker réutilisée dans le domaine ui.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons",
      "@/i18n/navigation"
    ]
  },
  {
    "name": "Select",
    "source": "components/ui/Select.tsx",
    "domain": "ui",
    "description": "Composant select du domaine ui.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons"
    ]
  },
  {
    "name": "SubmitButton",
    "source": "components/ui/SubmitButton.tsx",
    "domain": "ui",
    "description": "Action submit du domaine ui.",
    "status": "extracted",
    "dependencies": []
  },
  {
    "name": "Toast",
    "source": "components/ui/Toast.tsx",
    "domain": "ui",
    "description": "Composant toast du domaine ui.",
    "status": "extracted",
    "dependencies": [
      "@/components/icons"
    ]
  },
  {
    "name": "Toggle",
    "source": "components/ui/Toggle.tsx",
    "domain": "ui",
    "description": "Composant toggle du domaine ui.",
    "status": "extracted",
    "dependencies": []
  }
] as const satisfies readonly SourceComponent[];

export { sourceComponents };
export type { SourceComponent, SourceComponentStatus };
