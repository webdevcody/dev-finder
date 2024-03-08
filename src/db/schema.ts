import { pgTable, text } from "drizzle-orm/pg-core";

export const testing = pgTable("testing", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
});
