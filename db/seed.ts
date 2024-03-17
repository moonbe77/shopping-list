import { db, Comment, Author, Product } from "astro:db";

export default async function () {
  await db.insert(Author).values([
    { id: 1, name: "Bernardo" },
    { id: 2, name: "Nina" },
  ]);

  await db.insert(Product).values([
    {
      id: 1,
      authorId: 1,
      name: "Astro DB",
      price: 0,
      inStock: true,
      details: "A database for Astro apps",
      createdAt: new Date(),
    },
    {
      id: 2,
      authorId: 2,
      name: "Astro",
      price: 0,
      inStock: true,
      details: "A modern frontend framework",
      createdAt: new Date(),
    },
  ]);

  await db.insert(Comment).values([
    { authorId: 1, productId: 1, content: "Hope you like Astro DB!" },
    { authorId: 2, productId: 1, content: "Enjoy!" },
    { authorId: 2, productId: 2, content: "buy me now!" },
    { authorId: 1, productId: 2, content: " disfruta" },
  ]);
}
