//https://www.youtube.com/watch?v=OcTPaUfay5I&t=14s

import { getProjects } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export default async function getServerSideProps() {
  const projects = await getProjects();
  const headersList = headers();
  console.log(projects);

  revalidatePath("/");
  return (
    <div className=" items-center justify-center w-full mx-8">
      <h1 className=" text-4xl sm:text-7xl font-extrabold">
        Hello I&apos;m
        <span className=" bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400 bg-clip-text text-transparent ">
          {""} A.R.Baber
        </span>
        !
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-gray-600 ">
        Greetings everyone! This is my portfolio site which i made with Sanity
        CMS, it was a wonderfull experience! Check out my other different
        projects!
      </p>
      <h2 className="mt-20 font-bold text-gray-700 text-3xl"> My Projects</h2>
      <div className=" justify-center items-center mt-10 grid grid-cols-1 md:grid-cols-2 w-full  gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="grid grid-cols-1 w-4/5 justify-center items-center"
          >
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className=" hover:scale-105 hover:border-blue-500 transition  border-2 border-gray-500 rounded-lg p-1"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-600"
                />
              )}
            </Link>
            <div
              className=" mt-2 font-extrabold
          bg-gradient-to-r from-blue-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-center "
            >
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
