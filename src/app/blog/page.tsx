import BlockRender from "@/components/block-render/block-render";
import MainHeader from "@/components/main-header";
import getPage from "@/lib/get-page";

export default async function BlogPage() {
  const data = await fetch("https://wp.flackinjurylaw.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query MyQuery {
  nodeByUri(uri: "about-page-gutenberg") {
    ... on Page {
      id
      blocks(postTemplate: false)
      title
    }
  }
}
      `,
    }),
  }).then((res) => res.json());
  const page = data.data.nodeByUri;
  console.log(page.blocks);
  return (
    <>
      <MainHeader />
      <h1 className="text-center py-4 text-xl font-bold">{page.title}</h1>
      <p key={page.id}>
        {page.blocks.map((block: any) => {
          <p>{block.innerblocks}</p>;
        })}
      </p>
    </>
  );
}
