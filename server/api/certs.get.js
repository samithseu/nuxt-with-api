export default defineCachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig(event);
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${config.notionDbId}/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${config.notionApiKey}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
          }),
        }
      );
      const data = await response.json();
      return data.results.map((res) => {
        let id = res.properties.ID.rich_text[0].plain_text;
        let subject = res.properties.Subject.title[0].plain_text;
        let photoURL = res.properties.URL.url;
        return { id, subject, photoURL };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    maxAge: 60 * 2, //2 minutes,
    staleMaxAge: 30,
    swr: true,
  }
);
