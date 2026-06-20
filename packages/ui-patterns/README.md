# @recordair/ui-patterns

Assemblages métier réutilisables construits exclusivement avec `@recordair/ui-core`.

```tsx
import { KeyValue } from "@recordair/ui-core";
import { DetailCard } from "@recordair/ui-patterns";

const BookingDetails = () => (
  <DetailCard title="Réservation">
    <dl><KeyValue label="Total" value="160 €" /></dl>
  </DetailCard>
);
```

Les données, liens et actions sont fournis par props. Les services Record’air restent dans l’application.
