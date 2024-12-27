import { Client } from "@notionhq/client";

export default defineCachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig(event);
    const notion = new Client({ auth: config.notionApiKey });
    let allCertificates = [];
    try {
      const response = await notion.databases.query({
        database_id: config.notionDbId,
        filter: {
          and: [
            {
              property: "Org",
              select: {
                equals: "BTI",
              },
            },
            {
              property: "Given",
              checkbox: {
                equals: true,
              },
            },
          ],
        },
      });

      allCertificates = response.results.map((res) => {
        let id = res.properties.ID.rich_text[0].plain_text;
        let subject = res.properties.Subject.title[0].plain_text;
        let photoURL = res.properties.URL.url;
        return { id, subject, photoURL };
      });

      return allCertificates;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  {
    maxAge: 60 * 30, //30 minutes,
    staleMaxAge: 30,
    swr: true,
  }
);
