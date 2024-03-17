import { db, Comment, Author } from "astro:db";

export default async function () {
  await db.insert(Author).values([
    { id: 1, name: "Bernardo" },
    { id: 2, name: "Nina" },
  ]);

  await db.insert(Comment).values([
    { authorId: 1, content: "Hope you like Astro DB!" },
    { authorId: 2, content: "Enjoy!" },
  ]);
}
