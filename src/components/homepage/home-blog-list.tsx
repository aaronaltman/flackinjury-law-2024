import React from "react";
import { blogPosts } from "@/constants/blog-posts";
import Home from "@/app/page";
import HomeBlogSidebar from "./home-blog-sidebar";

export default function HomeBlogList() {
  return (
    <section>
      <div className="flex">
        <ul className="basis-2/3 flex flex-wrap justify-center gap-6 px-4 ">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
        <HomeBlogSidebar />
      </div>
    </section>
  );
}
