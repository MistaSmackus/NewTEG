import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


Amplify.configure({
  Auth: {
    region: outputs.auth.aws_region,
    userPoolId: outputs.auth.user_pool_id,
    userPoolWebClientId: outputs.auth.user_pool_client_id,
    identityPoolId: outputs.auth.identity_pool_id
  },
  API: {
    aws_appsync_graphqlEndpoint: outputs.data.url,
    aws_appsync_region: outputs.data.aws_region,
    aws_appsync_authenticationType: outputs.data.default_authorization_type,
    aws_appsync_apiKey: outputs.data.api_key
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator signUpAttributes={["name"]} data-bs-theme="dark">
      <App />
    </Authenticator>
  </React.StrictMode>
);
