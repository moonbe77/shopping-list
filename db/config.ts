import { defineDb, defineTable, column } from "astro:db";
import { Product } from "./productTable";
import { Author } from "./authorTable";
import { Comment } from "./commentTable";

export default defineDb({
  tables: { Comment, Author, Product },
});
