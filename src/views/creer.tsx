import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import { UnfinishedGroup, GroupInfo } from "../typeUtils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";

const NewEvent = () => {
  // react state for tracking form data
  const [formData, setFormData] = useState<GroupInfo>({
    name: "",
    id: uuidv4(),
    description: "",
    startTime: new Date(),
    endTime: new Date(),
  });

  // store React state in local value
  const setGroup = () => {
    const localKey: UnfinishedGroup = "UnfinishedGroup";
    localStorage.setItem(localKey, JSON.stringify(formData));
  };

  // when form data changes, push immediately to local storage
  useEffect(() => {
    // check for pre-existing data before making React state the point of truth
    // const localKey: UnfinishedGroup = "UnfinishedGroup";
    // const localData = localStorage.getItem(localKey);
    // if (localData) {
    //   setFormData(JSON.parse(localData));
    // }
    setGroup();
  }, [formData]);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("running form dataa");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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
            "& > :not(style)": {
              m: 1,
              display: "flex",
              flexDirection: "column",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">
              Nom de la société
            </InputLabel>
            <Input
              name="name"
              value={formData?.name}
              onChange={updateFormData}
            />
          </FormControl>
          <Button component="submit">Submit</Button>
        </Box>
      </>
    </>
  );
};

export default NewEvent;
