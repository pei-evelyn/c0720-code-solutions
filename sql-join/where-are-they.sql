select "add"."line1" as "street",
       "add"."district" as "district",
       "cit"."name" as "city",
       "count"."name" as "country"
  from "addresses" as "add"
  join "cities" as "cit" using ("cityId")
  join "countries" as "count" using ("countryId");
