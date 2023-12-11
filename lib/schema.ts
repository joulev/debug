import { pgTable, serial } from "drizzle-orm/pg-core";

export const aTableThatDoesntExist = pgTable("a_table_that_doesnt_exist", {
  id: serial("id").primaryKey(),
});
