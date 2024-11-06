import { type SchemaTypeDefinition } from "sanity";
import author from "./author";
import startup from "./startup";

// Sanity Studio’da kullanılan tüm veri türlerini (şemaları) toplar ve kaydeder. Bu dosya, Studio'nun hangi veri türlerini desteklediğini belirler.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};
