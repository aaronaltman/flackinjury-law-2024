import Image from "next/image";
import React from "react";

export default async function SinglePostPage({ params }: { params: any }) {
  const singlePostData = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query PostBySlug {
            postBy(slug: "${params.slug}") {
              id
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              slug
            }
          }
        `,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.postBy);
  return (
    <div>
      <h1>{singlePostData.title}</h1>
      <Image
        src={`${singlePostData.featuredImage.node.sourceUrl}`}
        width={300}
        height={200}
        layout="responsive"
        alt={singlePostData.title}
      />
      <div dangerouslySetInnerHTML={{ __html: singlePostData.content }} />
    </div>
  );
}
