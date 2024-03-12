01. Produce name and cities of all customers with the same rating as Hoffman.
SELECT cname, rating
FROM customer
WHERE RATING = (
    SELECT rating
    FROM customer
    WHERE CNAME = 'Hoffman'
) AND CNAME != 'Hoffman'


02. Produce the names and rating of all customers who have above average orders.
SELECT CNUM, cname, rating
FROM customer
WHERE CNUM IN (
    SELECT DISTINCT(CNUM)
    FROM orders
    WHERE AMT >= (
        SELECT AVG(amt)
        FROM orders
    )
)


03. All orders that are greater than the average for Oct. 4
SELECT ONUM, AMT
FROM orders
WHERE amt > (
    SELECT AVG(amt)
    FROM orders
    WHERE ODATE = '10-APR-94'
)


04. Find all customers whose cnum is 1000 above the snum of serres.
SELECT cnum, cname
FROM customer
WHERE cnum IN (
    SELECT (snum + 1005)
    FROM salespeople
)


05. Count the customers with rating above San Jose’s average.
SELECT COUNT(CNAME) AS 'Total Customer'
FROM customer
WHERE RATING > (
    SELECT AVG(RATING)
    FROM customer
    WHERE CITY = 'San Jose'
) AND CITY != 'San Jose'


06. Find name and number of salespeople who have more than or a customer.


07. Find total amount in orders for each salesperson for whom this total is greater than the amount of the largest order in the order table.



08. All orders credited to the same salesperson who services Hoffman.
SELECT *
FROM orders
WHERE SNUM = (
    SELECT SNUM
    FROM customer
    WHERE CNAME = 'Hoffman'
)

09. Find the sums of the amounts from order table grouped by date, eliminating all those dates where the sum was not at least 1000 above the maximum amount.
SELECT orders.ODATE, SUM(orders.AMT) AS 'Total Amount'
FROM orders
GROUP BY orders.ODATE
HAVING SUM(orders.AMT) >= (
    SELECT MAX(orders.AMT) + 1000
    FROM orders
)

10. Find salespeople number, name, and city who have multiple customers.