import Footer from "@/components/main-footer";
import MainHeader from "@/components/main-header";
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
    <div className="">
      <div className="bg-zinc-50">
        <MainHeader />
        <h1 className="prose lg:prose-xl font-bold py-4 px-4 text-center md:text-left">
          {singlePostData.title}
        </h1>
      </div>
      <div className="flex flex-col bg-zinc-50 border border-black/10 shadow-md">
        <Image
          src={`${singlePostData.featuredImage.node.sourceUrl}`}
          width={150}
          height={200}
          layout="responsive"
          alt={singlePostData.title}
          className="object-cover max-h-[300px] rounded-b-xl shadow-xl"
        />
        <div
          className="prose prose-lg mx-auto py-10 px-4"
          dangerouslySetInnerHTML={{ __html: singlePostData.content }}
        />
        <Footer />
      </div>
    </div>
  );
}
