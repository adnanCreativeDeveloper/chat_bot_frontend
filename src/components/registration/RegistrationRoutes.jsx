import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function RegistrationRoutes() {
  return (
    <>
      <Routes>
        <Route
          exact
          path='/login'
          element={
            <RegistrationForm
              formHeading='Welcome back'
              formLinkText="Don't have an account?"
              loginOrSignUp='Sign Up'
              linkPath='/sign-up'
            />
          }
        />
        <Route
          exact
          path='/sign-up'
          element={
            <RegistrationForm
              formHeading='Create an account'
              formLinkText='Already have an account?'
              loginOrSignUp='Login'
              linkPath='/login'
            />
          }
        />
      </Routes>
    </>
  );
}

export default RegistrationRoutes;
