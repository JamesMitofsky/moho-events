import { Typography, Box } from "@mui/material";
import { GroupInfo, GroupInfoFieldNames } from "../typeUtils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";
import TextInput from "../components/TextInput";
import SubmitEvent from "../components/SubmitEvent";

const NewEvent = () => {
  // array of input fields
  const [fields, setFields] = useState<JSX.Element[]>([]);

  // track form data
  const [formData, setFormData] = useState<GroupInfo>({
    associationName: "",
    eventName: "",
    eventType: "",
    numberOfQuote: 0,
    category: "",
    soldBy: "",
    comments: "",
    contact: {
      companyName: "",
      contactName: "",
      telephoneNumber: 0,
      email: "",
    },
    id: uuidv4(),
    startTime: new Date(),
    endTime: new Date(),
  });
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

  const fieldNames: GroupInfoFieldNames = {
    associationName: "Nom de l'association",
    eventName: "Nom de l'événement",
    eventType: "Type d'événement",
    numberOfQuote: "Nombre de devis",
    category: "Catégorie",
    soldBy: "Vendu par",
    comments: "Commentaires",
    contact: {
      companyName: "Nom de l'entreprise",
      contactName: "Nom du contact",
      telephoneNumber: "Numéro de téléphone",
      email: "Email",
    },
    startTime: "Date de début",
    endTime: "Date de fin",
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(fieldNames)) {
      // only render fields that are text based
      if (typeof value !== "string") return;
      setFields((prevFields) => [
        ...prevFields,
        <TextInput
          key={uuidv4()}
          label={value}
          value={formData[key as keyof GroupInfo]}
          name={key}
          onChange={updateFormData}
        />,
      ]);
      console.log(
        "key —",
        key,
        "\n\nvalue —",
        value,
        "\n\nform data —",
        formData[key as keyof GroupInfo]
      );
    }
  }, []);

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
        {fields}
        <SubmitEvent formData={formData} setFormData={setFormData} />
      </Box>
    </>
  );
};

export default NewEvent;
