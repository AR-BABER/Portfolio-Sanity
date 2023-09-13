import React from "react";
import { PortableText } from "@portabletext/react";
import { getProject } from "@/sanity/lib/client";
import Image from "next/image";
type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  console.log(project);
  return (
    <div>
      <header className="flex items-center justify-between object-contain">
        <h1 className=" drop-shadow text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent ">
          {project?.name}
        </h1>
        <div className="flex flex-col p-2 gap-2 m-2">
          {project?.urld ? (
            <a
              href={project?.urld}
              title="View Project"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-pink-500 hover:text-pink-100 transition bg-gray-200 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap"
            >
              View deployed Project
            </a>
          ) : null}
          {project?.urlg ? (
            <a
              href={project?.urlg}
              title="View code"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-purple-500 hover:text-pink-100 transition bg-gray-200 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap"
            >
              View Source Code
            </a>
          ) : null}
        </div>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project?.content} />
      </div>
      <Image
        src={project?.image}
        alt={project?.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl p-5"
      />
      <div className="text-lg text-gray-700 mt-10 ">
        <PortableText value={project?.discription}></PortableText>
      </div>
    </div>
  );
}
