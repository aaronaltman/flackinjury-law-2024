export default async function getPage(uri: string) {
  const params = {
    query: `
            query {
          nodeByUri(uri: "${uri}") {
            ... on Page {
              id
              blocks(postTemplate: false)
              title
            }
            }
        `,
    variables: {
      uri,
    },
  };
  const response = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();
  return data;
}
