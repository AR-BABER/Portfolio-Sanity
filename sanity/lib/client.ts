import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { Project, Page } from "@/types";
import { promises } from "dns";
import { revalidatePath } from "next/cache";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
});

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type=="project"]{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image":image.asset->url,
      urld,
      content
      
    }`,
    { cache: "no-store" }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug][0]
    {
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image":image.asset->url,
      urld,
      urlg,
      content,
      discription
    }`,
    { slug: slug },
    { next: { revalidate: 10 } }
  );
}
export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`
  *[_type =="page"]{

    _id,
    _createdAt,
    title,
    "slug": slug.current
  }
  `,
    { next: { revalidate: 10 } }
  );
}
export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`
  *[_type == "page" && slug.current==$slug][0]
  {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content

  }
  `,
    { slug: slug },
    { next: { revalidate: 10 } }
  );
}
