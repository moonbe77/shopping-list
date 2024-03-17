import { column, defineTable } from "astro:db";

export const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    name: column.text(),
  },
});
