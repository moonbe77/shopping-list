import { column, defineTable } from "astro:db";
import { Author } from "./authorTable";
import { Product } from "./productTable";

export const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    productId: column.number({
      references: () => Product.columns.id,
    }),
    content: column.text(),
  },
});
