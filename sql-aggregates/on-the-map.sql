select "count"."name" as "country",
        count("cit"."countryId") as "numberOfCities"
  from "cities" as "cit"
  join "countries" as "count" using ("countryId")
 group by "count"."name";
