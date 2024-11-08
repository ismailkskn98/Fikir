import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type=="startup"] {
  _id,
  title,
  slug,
  category,
  _createdAt,
  description,
  image,
  views,
  pitch,
  author -> {
    id,
    name,
    username,
    email,
    image,
    bio
  }
}`);
