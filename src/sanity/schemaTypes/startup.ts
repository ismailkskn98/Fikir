import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "startup", // şema adı veri sorgularken kullanılır
  title: "Startup", // Yönetici panelinde görünecek başlık
  type: "document", // şema türü
  icon: UserIcon,
  fields: [
    defineField({
      name: "id", // Alanın adı
      title: "id", // Görünecek başlık
      type: "number", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.min(2).max(30).required().error("Lütfen bir kategori girin"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      title: "Pitch",
      type: "markdown",
    }),
  ],
});
