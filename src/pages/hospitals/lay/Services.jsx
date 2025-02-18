import React from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import { useForm, FormProvider } from "react-hook-form";



const Services = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Header />
      <Main/>
    </FormProvider>
  );
};
export default Services;