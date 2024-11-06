import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// Yönetici panelindeki içerik düzenini (sol menü yapısını) belirlemek için kullanılır.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content") // Sol menüde gözükecek ana başlık
    // .items(S.documentTypeListItems()); // Tüm belge türlerinin listelenmesi
    .items([S.documentTypeListItem("author").title("Authors"), S.documentTypeListItem("startup").title("Startups")]);
