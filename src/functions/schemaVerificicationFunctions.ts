import { ModifiedServerResponse } from "@/types/globalTypes";

export function verifySchemaOfOneEvent(
  event: ModifiedServerResponse
): ModifiedServerResponse | null {
  const eventMatchesCurrentSchemad =
    event.creationDetails.versionOfFormInputs ===
    process.env.NEXT_PUBLIC_CURRRENT_SCHEMA_VERSION;

  return eventMatchesCurrentSchemad ? event : null;
}

export function verifySchemaOfMultipleEvents(
  events: ModifiedServerResponse[]
): ModifiedServerResponse[] {
  const onlyEventsMatchingCurrentSchema = events.filter((event) =>
    verifySchemaOfOneEvent(event)
  );

  return onlyEventsMatchingCurrentSchema;
}
