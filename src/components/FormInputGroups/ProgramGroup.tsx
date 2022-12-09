import { TextField, Typography, Box } from "@mui/material";
import { TitledGroup } from "../Layouts/TitledGroup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimeAndPlaceInput } from "../inputs/TimeAndPlaceInput";
import Time from "../inputs/Time";

export const ProgramGroup = ({ register, control }: any) => {
  const allProps = {
    register,
    control,
  };

  return (
    <TitledGroup title="Programme">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: "grid", gap: 5 }}>
          <TimeAndPlaceInput
            componentTitle="Arrivée organisateurs"
            parentObj="program.organiserArrival"
            {...allProps}
          />
          <TimeAndPlaceInput
            componentTitle="Café d'accueil"
            parentObj="program.welcomeCoffee"
            {...allProps}
          />
          <TimeAndPlaceInput
            componentTitle="Arrivée participants"
            parentObj="program.participantArrival"
            {...allProps}
          />
          <TimeAndPlaceInput
            componentTitle="Premier Réunion / Atelier"
            parentObj="program.firstMeeting"
            {...allProps}
          />
          <TimeAndPlaceInput
            componentTitle="Déjeuner"
            parentObj="program.lunch"
            {...allProps}
          />
          <TimeAndPlaceInput
            componentTitle="Deuxième Réunion / Atelier"
            parentObj="program.secondMeeting"
            {...allProps}
          />
          <Box sx={{ display: "grid", gap: 1 }}>
            <Typography>Misc.</Typography>
            <TextField
              label={"Nombre de pax"}
              {...register("program.numberOfPeople")}
            />
            <TextField
              label={"Commentaires de programme"}
              {...register("program.comments")}
            />
            <Time
              control={control}
              dataLabel="program.depatureTime"
              textLabel="Heure de départ"
            />
          </Box>
        </Box>
      </LocalizationProvider>
    </TitledGroup>
  );
};
