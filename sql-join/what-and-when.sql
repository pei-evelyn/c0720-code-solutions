select "f"."releaseYear",
       "f"."title" as "filmName",
       "c"."name" as "category"
  from "films" as "f"
  join "filmCategory" as "fc" using ("filmId")
  join "categories" as "c" using ("categoryId")
 where "f"."title" = 'Boogie Amelie';
