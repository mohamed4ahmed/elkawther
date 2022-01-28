import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "w524dcjf",
  dataset: "production",
  useCdn: "true",
});
