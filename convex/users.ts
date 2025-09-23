import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { createAuth, authComponent } from "./auth";

export const createUser = mutation({
  args: {
    currentPassword: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    await createAuth(ctx).api.updateUser({
      body: {
        // currentPassword: args.currentPassword,
        // newPassword: args.newPassword,
        name: "New User",
      },
      headers: await authComponent.getHeaders(ctx),
    });
  },
});

export const updateUserPassword = mutation({
  args: {
    currentPassword: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    await createAuth(ctx).api.changePassword({
      body: {
        currentPassword: args.currentPassword,
        newPassword: args.newPassword,
      },
      headers: await authComponent.getHeaders(ctx),
    });
  },
});
