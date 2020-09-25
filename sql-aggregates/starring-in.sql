select "cat"."name" as "filmCategory",
       count("film"."categoryId") as "numberOfFilms"
  from "categories" as "cat"
  join "filmCategory" as "film" using ("categoryId")
  join "castMembers" as "cast" using ("filmId")
  join "actors" as "act" using ("actorId")
 where "act"."firstName" = 'Lisa' and
       "act"."lastName" = 'Monroe'
 group by "cat"."name";
