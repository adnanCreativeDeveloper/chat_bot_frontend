import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatbotLayout from "./components/chat bot layout/ChatbotLayout";
import RegistrationRoutes from "./components/registration/RegistrationRoutes";
import LoginOrSignUp from "./components/registration/LoginOrSignUp";

function App() {
  return (
    <>
      <LoginOrSignUp />
      {/* <RegistrationRoutes /> */}
      <ChatbotLayout />

    </>
  );
}

export default App;
