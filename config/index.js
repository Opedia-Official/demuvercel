const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://admin.opediatech.com"
  : "http://admin.opediatech.com";

export const ClientURL = dev
  ? "http://localhost:3000/"
  : "http://admin.opediatech.com";
