import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider, GoogleOneTap } from '@clerk/clerk-react';
const PUBLISHABLE_KEY = "pk_test_c3VwcmVtZS1lbGVwaGFudC0xOC5jbGVyay5hY2NvdW50cy5kZXYk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <GoogleOneTap />
    <App />
    </ClerkProvider>
  </React.StrictMode>
);
