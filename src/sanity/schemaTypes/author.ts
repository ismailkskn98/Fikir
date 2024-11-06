import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "author", // şema adı veri sorgularken kullanılır
  title: "Author", // Yönetici panelinde görünecek başlık
  type: "document", // şema türü
  icon: UserIcon,
  fields: [
    // defineField({
    //   name: "name", // Alanın adı
    //   title: "Name", // Görünecek başlık
    //   type: "string", // Veri türü (string metin verisi içindir)
    //   validation: (Rule) => Rule.required().min(3).max(50), // Zorunlu, minimum ve maksimum karakter uzunluğu
    // }),
    defineField({
      name: "id", // Alanın adı
      title: "id", // Görünecek başlık
      type: "number", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "name", // Alanın adı
      title: "name", // Görünecek başlık
      type: "string", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "username", // Alanın adı
      title: "username", // Görünecek başlık
      type: "string", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "email", // Alanın adı
      title: "email", // Görünecek başlık
      type: "string", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "image", // Alanın adı
      title: "image", // Görünecek başlık
      type: "url", // Veri türü (string metin verisi içindir)
    }),
    defineField({
      name: "bio", // Alanın adı
      title: "bio", // Görünecek başlık
      type: "text", // Veri türü (string metin verisi içindir)
    }),
  ],
  // belirli bir doküman türü için (örneğin, "Author") listede görünen başlık veya açıklama gibi önizleme bilgilerini özelleştirebilirsin.
  // title olarak name alanını seçmiş olduk. Yani, Sanity Studio'da bir "Author" belgesi listelendiğinde, name alanındaki değer başlık olarak görüntülenir.
  preview: {
    select: {
      title: "name",
    },
  },
});
