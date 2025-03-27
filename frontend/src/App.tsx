import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/sso-callback"
                    element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
                />
                <Route path="/auth-callback" element={<AuthCallbackPage />} />

                <Route element={<MainLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/chat" element={<ChatPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
