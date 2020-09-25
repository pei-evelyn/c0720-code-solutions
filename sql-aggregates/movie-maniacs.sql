select "cust"."firstName",
       "cust"."lastName",
       sum("pay"."amount") as "totalAmountSpent"
  from "customers" as "cust"
  join "payments" as "pay" using ("customerId")
 group by "cust"."customerId"
 order by "totalAmountSpent" desc;
