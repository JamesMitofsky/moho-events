import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReturnHome from "../components/ReturnHome";
import { fetchSpecificEvent } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { AllEventGroups, ModifiedServerResponse } from "../utils/globalTypes";
import { PaddedChildren } from "../components/Layouts/PaddedChildren";
import { SocietyGroup } from "../components/FormInputGroups/SocietyGroup";
import { ContactGroup } from "../components/FormInputGroups/ContactGroup";
import { ProgramGroup } from "../components/FormInputGroups/ProgramGroup";
import { WifiGroup } from "../components/FormInputGroups/WifiGroup";
import { Configuration } from "../components/FormInputGroups/Configuration";
import { Button } from "@mui/material";
import { SignageGroup } from "../components/FormInputGroups/SignageGroup";
import { useForm } from "react-hook-form";

export default function RenderEventInfo() {
  const [eventData, setEventData] = useState<ModifiedServerResponse>(
    {} as ModifiedServerResponse
  );

  // set form state with event data
  const {
    register,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AllEventGroups>({ defaultValues: eventData });

  // query firebase using the eventId
  const { eventId } = useParams<{ eventId: string }>();
  useEffect(() => {
    const getEvent = async function () {
      const res = await fetchSpecificEvent(eventId as string);
      setEventData(res);
    };
    getEvent();
  }, [eventId]);

  useEffect(() => {
    reset(eventData);
  }, [eventData, reset]);

  const regCtrlProps = { register, control };

  return (
    <>
      <ReturnHome />
      {/* have the grid display two columns when the page is wide enough to allow */}
      <PageTitle
        title={eventData?.society?.eventName}
        subtitle="événement"
        icon={EventAvailableIcon}
      />
      <PaddedChildren padding={3}>
        <SocietyGroup {...regCtrlProps} />
        <ContactGroup {...regCtrlProps} />
        <ProgramGroup {...regCtrlProps} />
        <SignageGroup {...regCtrlProps} />
        <WifiGroup {...regCtrlProps} />
        <Configuration {...regCtrlProps} />
      </PaddedChildren>
    </>
  );
}
