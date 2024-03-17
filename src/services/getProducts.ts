import { db, eq, Comment, Author, Product } from "astro:db";

const comments = await db
  .select()
  .from(Product)
  .innerJoin(Author, eq(Product.authorId, Author.id))
  .leftJoin(Comment, eq(Product.id, Comment.productId))
  .all();

export type ProductTypes = typeof Product.$inferSelect;
export type AuthorTypes = typeof Author.$inferSelect;
export type CommentTypes = typeof Comment.$inferSelect;

export const products = comments.reduce<
  Record<
    number,
    {
      product: ProductTypes;
      author: AuthorTypes;
      comment?: CommentTypes[];
    }
  >
>((acc, comment) => {
  const { Product, Author, Comment } = comment;
  const productId = Product.id;
  if (!acc[productId]) {
    acc[productId] = {
      product: Product,
      author: Author,
      comment: [],
    };
  }
  if (Comment) {
    acc[productId]?.comment?.push(Comment);
  }
  return acc;
}, {});
