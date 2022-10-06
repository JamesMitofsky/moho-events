import { Typography, Box } from "@mui/material";
import { GroupInfo, GroupInfoFieldNames, EmptyForm } from "../typeUtils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";
import TextInput from "../components/TextInput";
import SubmitEvent from "../components/SubmitEvent";

const NewEvent = () => {
  // track form data
  const emptyFormState: EmptyForm = {
    associationName: "",
    eventName: "",
    eventType: "",
    numberOfQuote: null,
    category: "",
    soldBy: "",
    comments: "",
    companyName: "",
    contactName: "",
    telephoneNumber: null,
    email: "",
    startTime: new Date(),
    endTime: new Date(),
  };
  const [formData, setFormData] = useState<GroupInfo>({
    ...emptyFormState,
    id: uuidv4(),
  });

  const fieldNames: GroupInfoFieldNames = {
    associationName: "Nom de l'association",
    eventName: "Nom de l'événement",
    eventType: "Type d'événement",
    numberOfQuote: "Nombre de devis",
    category: "Catégorie",
    soldBy: "Vendu par",
    comments: "Commentaires",
    companyName: "Nom de l'entreprise",
    contactName: "Nom du contact",
    telephoneNumber: "Numéro de téléphone",
    email: "Email",
    startTime: "Date de début",
    endTime: "Date de fin",
  };

  // track state of local storage to avoid overwriting it
  const [localChecked, setLocalChecked] = useState<boolean>(false);

  // check for pre-existing data before making React state the point of truth
  useEffect(() => {
    const localData = localStorage.getItem(
      import.meta.env.VITE_UNFINISHED_GROUP
    );
    if (localData) {
      setFormData(JSON.parse(localData));
    }
    setLocalChecked(true);
  }, []);

  // when form data changes, push immediately to local storage
  useEffect(() => {
    if (!localChecked) return;

    localStorage.setItem(
      import.meta.env.VITE_UNFINISHED_GROUP,
      JSON.stringify(formData)
    );
  }, [formData]);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Créer un Evénement</title>
      </Helmet>
      <Typography color="primary.main" variant="h2">
        Créer un Evénement
      </Typography>
      <Box
        component="form"
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        {Object.keys(fieldNames).map((key) => {
          // if the key is a date object, return a date picker
          if (key === "startTime" || key === "endTime" || key === "telephone")
            return;

          return (
            <TextInput
              key={key}
              label={fieldNames[key as keyof GroupInfoFieldNames]}
              value={formData[key as keyof GroupInfo]}
              name={key}
              onChange={updateFormData}
            />
          );
        })}
        <SubmitEvent
          emptyFormState={emptyFormState}
          formData={formData}
          setFormData={setFormData}
        />
      </Box>
    </>
  );
};

export default NewEvent;
