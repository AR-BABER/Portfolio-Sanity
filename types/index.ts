import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  urld: string;
  urlg: string;
  content: PortableTextBlock[];
  discription: PortableTextBlock[];
};

export type Page = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
