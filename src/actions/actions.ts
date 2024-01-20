export async function getPostBlocks({ params }: any) {
  const response = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        nodeByUri(uri: "${params.uri}") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      `,
    }),
  });
  return response.json();
}

export default async function SinglePagePage({ params }: { params: any }) {
  const singlePageData = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query PageByUri {
  pageBy(uri: "${params.uri}") {
    content
    slug
    uri
    title
    seo {
      canonical
      cornerstone
      focuskw
      fullHead
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      title
      twitterDescription
      twitterTitle
    }
  }
}
            `,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.pageBy);
}
