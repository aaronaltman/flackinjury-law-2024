import HomeBanner from "@/components/homepage/home-banner";
import Footer from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import React from "react";
import type { Metadata } from "next";

type Props = {
  params: { uri: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const singlePageData = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query PageByUri {
  pageBy(uri: "${params.uri}") {
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
  return {
    title: singlePageData?.seo?.title,
    description: singlePageData?.seo?.metaDesc,
  };
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
  return (
    <div>
      <MainHeader />
      <HomeBanner />
      <h1 className="prose">{singlePageData?.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: singlePageData?.content }}
      />
      <Footer />
    </div>
  );
}
