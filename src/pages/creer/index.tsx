import PageTitle from "@/components/layouts/PageTitle";
import dynamic from "next/dynamic";

export default function NewEvent() {
  const EventSubmissionForm = dynamic(
    () => import("@/components/FormInputGroups/EventSubmissionForm"),
    { ssr: false }
  );

  return (
    <>
      <PageTitle title="Créer un Evènement" />
      <EventSubmissionForm />
    </>
  );
}
