import { column, defineTable } from "astro:db";
import { Author } from "./authorTable";
import { Comment } from "./commentTable";
const { number, text, boolean, json, date } = column;

export const Product = defineTable({
  columns: {
    id: number({ primaryKey: true, unique: true }),
    authorId: number({ references: () => Author.columns.id }),
    name: text(),
    price: number(),
    inStock: boolean(),
    details: text(),
    createdAt: date(),
  },
});
