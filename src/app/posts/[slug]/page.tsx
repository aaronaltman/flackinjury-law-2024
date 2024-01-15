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
          width={150}
          height={200}
          layout="responsive"
          alt={singlePostData.title}
          className="object-cover max-h-[300px] rounded-b-xl shadow-xl"
          priority={true}
        />
        <div className="max-w-3xl mx-auto my-10 prose">
          {singlePostData.content}
        </div>
        <Footer />
      </div>
    </div>
  );
}
