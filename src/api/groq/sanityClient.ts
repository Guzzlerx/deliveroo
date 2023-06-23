import { type ClientConfig, createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "om2jr0wd",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source);
export { urlFor, client as sanityClient };
