import { getPage } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { PortableTextInput } from "sanity";
type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="mx-8">
      <h1 className=" drop-shadow text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent ">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10 ">
        <PortableText value={page.content}></PortableText>
      </div>
    </div>
  );
}
