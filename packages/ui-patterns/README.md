# @recordair-ds/ui-patterns

Assemblages métier réutilisables construits exclusivement avec `@recordair-ds/ui-core`.

```tsx
import { KeyValue } from "@recordair-ds/ui-core";
import { DetailCard } from "@recordair-ds/ui-patterns";

const BookingDetails = () => (
  <DetailCard title="Réservation">
    <dl><KeyValue label="Total" value="160 €" /></dl>
  </DetailCard>
);
```

Les données, liens et actions sont fournis par props. Les services Record’air restent dans l’application.
