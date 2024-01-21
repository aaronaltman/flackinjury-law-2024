import Footer from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const singlePostSeoData = await fetch(
    "https://wp.flackinjurylaw.com/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query PageByUri {
  postBy(slug: "${params.slug}") {
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
    }
  )
    .then((res) => res.json())
    .then((res) => res.data.pageBy);
  return {
    title: singlePostSeoData?.seo?.title,
    description: singlePostSeoData?.seo?.metaDesc,
  };
}

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
          width={400}
          height={200}
          alt={singlePostData.title}
          className=" mx-auto rounded-b-xl shadow-xl object-cover w-full h-64"
          priority={true}
        />
        <div
          className="prose lg:prose-xl py-4 px-4 mx-auto my-5"
          dangerouslySetInnerHTML={{ __html: singlePostData.content }}
        />
        <Footer />
      </div>
    </div>
  );
}
