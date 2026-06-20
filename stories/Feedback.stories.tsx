import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button, Modal, Skeleton, Spinner, Toast } from "@recordair/ui-core";

const FeedbackCatalog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <Alert tone="info" title="Information">La réservation reste modifiable pendant 15 minutes.</Alert>
        <Alert tone="success" title="Paiement confirmé">Le studio a reçu la demande.</Alert>
        <Alert tone="warning" title="Action requise">Ajoute un moyen de paiement.</Alert>
        <Alert tone="error" title="Échec du paiement">Vérifie les informations de carte.</Alert>
      </div>
      <div className="flex items-center gap-4">
        <Spinner label="Chargement" />
        <div className="w-56 space-y-2"><Skeleton /><Skeleton className="w-2/3" /></div>
      </div>
      <div className="flex gap-4">
      <Button variant="secondary" onClick={() => setModalOpen(true)}>
        Ouvrir la modale
      </Button>
      <Button onClick={() => setToastOpen(true)}>Afficher la notification</Button>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeLabel="Fermer la modale"
        labelledBy="demo-modal-title"
      >
        <h2 id="demo-modal-title" className="text-xl font-bold text-neutral-900">
          Confirmer l’action
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Le focus reste contenu dans la modale et revient au déclencheur après fermeture.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setModalOpen(false)}>Confirmer</Button>
        </div>
      </Modal>
      <Toast
        open={toastOpen}
        variant="success"
        message="Les modifications ont été enregistrées."
        closeLabel="Fermer la notification"
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
};

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Ouvrir la modale</Button>
      <Modal open={open} onClose={() => setOpen(false)} closeLabel="Fermer" labelledBy="standalone-modal-title">
        <h2 id="standalone-modal-title" className="text-heading-sm font-semibold">Confirmer la réservation</h2>
        <p className="mt-2 text-sm text-neutral-600">Le créneau sera bloqué pendant quinze minutes.</p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
          <Button onClick={() => setOpen(false)}>Confirmer</Button>
        </div>
      </Modal>
    </>
  );
};

const meta = {
  title: "Core/Feedback",
  component: FeedbackCatalog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FeedbackCatalog>;

type Story = StoryObj<typeof meta>;

const Interactive: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
import { Alert, Button, Modal, Skeleton, Spinner, Toast } from "@recordair/ui-core";

export const FeedbackExample = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Alert tone="info" title="Information">La réservation reste modifiable.</Alert>
      <Spinner label="Chargement" />
      <Skeleton />
      <Button onClick={() => setModalOpen(true)}>Ouvrir la modale</Button>
      <Button onClick={() => setToastOpen(true)}>Afficher la notification</Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} labelledBy="modal-title">
        <h2 id="modal-title">Confirmer l’action</h2>
      </Modal>
      <Toast
        open={toastOpen}
        variant="success"
        message="Modifications enregistrées."
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
};`,
      },
    },
  },
};

const AlertStory: Story = {
  name: "Alert",
  render: () => <div className="w-[32rem]"><Alert tone="success" title="Paiement confirmé">La réservation est enregistrée.</Alert></div>,
};

const ModalStory: Story = {
  name: "Modal",
  render: () => <ModalExample />,
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
import { Button, Modal } from "@recordair/ui-core";

export const ConfirmationModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Ouvrir la modale</Button>
      <Modal open={open} onClose={() => setOpen(false)} labelledBy="modal-title">
        <h2 id="modal-title">Confirmer la réservation</h2>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button onClick={() => setOpen(false)}>Confirmer</Button>
      </Modal>
    </>
  );
};`,
      },
    },
  },
};

const ToastStory: Story = {
  name: "Toast",
  render: () => <Toast open variant="success" message="Modifications enregistrées." closeLabel="Fermer" onClose={() => undefined} />,
};

const SpinnerStory: Story = {
  name: "Spinner",
  render: () => <Spinner label="Chargement" size="lg" />,
};

const SkeletonStory: Story = {
  name: "Skeleton",
  render: () => <div className="w-80 space-y-3"><Skeleton shape="rectangle" /><Skeleton /><Skeleton className="w-2/3" /></div>,
};

export default meta;
export { AlertStory, Interactive, ModalStory, SkeletonStory, SpinnerStory, ToastStory };
