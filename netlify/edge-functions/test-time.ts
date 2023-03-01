export default () => new Response("Hello world")

export const config: Config = () => ({
  cache: "manual",
  path: "/current-time",
});
