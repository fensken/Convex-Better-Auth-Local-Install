import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { passkeyClient, usernameClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [convexClient(), passkeyClient(), usernameClient()],
});
