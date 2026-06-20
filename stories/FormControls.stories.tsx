import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Checkbox,
  Field,
  Input,
  NativeSelect,
  Radio,
  SearchInput,
  Select,
  Textarea,
  Toggle,
} from "@recordair-ds/ui-core";
import { MailIcon } from "@recordair-ds/ui-core/icons";

const FormControlsDemo = () => (
  <form className="flex w-full max-w-lg flex-col gap-6 rounded-lg border border-neutral-200 bg-neutral-0 p-8">
    <Field label="Nom du studio" htmlFor="studio-name" hint="Visible publiquement.">
      <Input id="studio-name" defaultValue="Studio République" leadingIcon={<MailIcon aria-hidden className="size-4" />} />
    </Field>
    <Field label="Rechercher" htmlFor="search">
      <SearchInput id="search" placeholder="Studio, ville ou équipement" />
    </Field>
    <Field label="Ville" htmlFor="city">
      <Select id="city" options={["Lille", "Lyon", "Marseille", "Paris"]} />
    </Field>
    <Field label="Description" htmlFor="description" hint="Présente l’ambiance et les équipements.">
      <Textarea id="description" placeholder="Décris ton studio" />
    </Field>
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-2 text-sm font-semibold text-neutral-900">Type de session</legend>
      <Radio name="session" label="Enregistrement" description="Voix et instruments" defaultChecked />
      <Radio name="session" label="Répétition" description="Groupe complet" />
    </fieldset>
    <Field label="Type" htmlFor="type">
      <NativeSelect id="type" defaultValue="recording">
        <option value="recording">Studio d’enregistrement</option>
        <option value="rehearsal">Studio de répétition</option>
      </NativeSelect>
    </Field>
    <label className="flex items-start gap-3 text-sm text-neutral-700">
      <Checkbox defaultChecked />
      J’accepte les conditions générales
    </label>
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-neutral-900">Notifications email</span>
      <Toggle name="email" defaultChecked ariaLabel="Activer les notifications email" />
    </div>
  </form>
);

const meta = {
  title: "Core/Form controls",
  component: FormControlsDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormControlsDemo>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
