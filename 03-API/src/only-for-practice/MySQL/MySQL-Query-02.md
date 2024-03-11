01. All combination of salespeople and customers who belong to the same city.
SELECT salespeople.Snum, customer.CNUM, salespeople.City
FROM salespeople
INNER JOIN customer
ON salespeople.Snum = customer.SNUM



02. Names of all customers matched with the salespeople serving them.
SELECT salespeople.Sname, customer.CNAME
FROM salespeople
INNER JOIN customer
ON salespeople.Snum = customer.SNUM



03. List each order with the name of the customer who placed the order.
SELECT customer.CNAME, orders.AMT, orders.ONUM
FROM orders
INNER JOIN customer
ON orders.CNUM = customer.CNUM



04. Produce a listing of all the customers serviced by salespeople having commission more than 12%.
SELECT customer.CNAME, salespeople.Sname, salespeople.Comm
FROM salespeople
INNER JOIN customer
ON salespeople.Snum = customer.SNUM
WHERE salespeople.Comm > 0.12





05. Calculate the amount of salesperson’s commission on each order with a rating above 100.
SELECT salespeople.Snum, orders.ONUM, salespeople.Comm, (orders.AMT * salespeople.Comm) AS COMM_AMT
FROM salespeople
INNER JOIN orders
ON salespeople.Snum = orders.SNUM
INNER JOIN customer
ON salespeople.Snum = customer.SNUM
WHERE customer.RATING > 100





06. Display all customers located in cities where salesman serves has his customers.
SELECT salespeople.Snum, customer.CNUM, customer.CNAME, salespeople.City, customer.CITY
FROM salespeople
INNER JOIN customer
ON salespeople.Snum = customer.SNUM
WHERE salespeople.City = customer.CITY





07. Produce all pairs of orders by a given customer, name that customer and eliminate duplicates.
SELECT customer.CNUM, orders.ONUM, customer.CNAME, customer.CNAME
FROM customer
INNER JOIN orders
ON customer.CNUM = orders.CNUM





08. Find all customers with orders on Mar 10th
SELECT DISTINCT(customer.CNAME)
FROM customer
INNER JOIN orders
ON customer.CNUM = orders.CNUM
WHERE orders.ODATE = '10-MAR-94'






09. Find all salespeople who have customers in their cities who they don’t service.