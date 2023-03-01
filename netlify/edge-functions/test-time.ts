import { Config } from "https://edge.netlify.com";

export default () => {
  const body = new Date().toUTCString();
  const headers = {
    "cache-control": "public, s-maxage=60",
  };

  return new Response(body, { headers });
};

export const config: Config = () => ({
  cache: "manual",
  path: "/current-time",
});
