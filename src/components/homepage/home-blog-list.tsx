import React from "react";
import HomeBlogSidebar from "./home-blog-sidebar";
import Image from "next/image";
import { Link } from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  content: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

type Edge = {
  node: BlogPost;
};

export default async function HomeBlogList() {
  const blogPosts = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query PostFirstSix {
        posts(first: 6) {
          edges {
            node {
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
        }
      }
    `,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.posts.edges.map((edge: Edge) => edge.node));

  return (
    <section className="flex items-center justify-center p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post: BlogPost) => (
          <li key={post.slug} className="cursor-pointer">
            <a href={`/posts/${post.slug}`} className="block">
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={`${post.featuredImage.node.sourceUrl}`}
                  width={300}
                  height={200}
                  layout="responsive"
                  alt={`featured image for ${post.title}`}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h2 className="mt-2 text-left text-lg font-semibold">
                {post.title}
              </h2>
              <p className="line-clamp-3">{post.content}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
