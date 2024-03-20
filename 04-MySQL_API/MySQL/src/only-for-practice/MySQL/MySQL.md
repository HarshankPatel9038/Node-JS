1. Create Table
CREATE TABLE categories (
  _id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  category_desc TEXT NOT NULL,
  isActive TINYINT DEFAULT(1)
)

2. Add Data In Table
INSERT INTO categories (category_name, category_desc) VALUES ('Food', 'Edible goods')


3. Update Table Data
UPDATE categories
SET category_name='Books', category_desc='Reading materials'
WHERE _id=1


4. Delete Table Row
DELETE FROM categories WHERE _id=1


5. Add Multiple Data In Table
INSERT INTO categories (category_name, category_desc) VALUES ('Food', 'Edible goods'), ('Books', 'Reading materials'), ('Clothing', 'Apparel and accessories'), ('Electronics', 'Electronic devices')


6. Left Outer Join
SELECT salespeople.Snum, salespeople.Sname, customer.CNUM, customer.CNAME
FROM salespeople
LEFT OUTER JOIN customer
ON salespeople.Snum = customer.SNUM
----------------------------------------------------
SELECT salespeople.Snum, salespeople.Sname, orders.ONUM, orders.SNUM, orders.AMT
FROM salespeople
LEFT OUTER JOIN orders
ON salespeople.Snum = orders.SNUM
WHERE orders.ONUM IS NULL



7. Right Outer Join
SELECT salespeople.Snum, salespeople.Sname, orders.ONUM, orders.SNUM, orders.AMT
FROM salespeople
Right OUTER JOIN orders
ON salespeople.Snum = orders.SNUM
----------------------------------------------------
SELECT salespeople.Snum, salespeople.Sname, customer.CNUM, customer.CNAME
FROM salespeople
Right OUTER JOIN customer
ON salespeople.Snum = customer.SNUM



8. Union All
SELECT salespeople.Snum, salespeople.Sname, orders.ONUM, orders.SNUM, orders.AMT
FROM salespeople
LEFT OUTER JOIN orders
ON salespeople.Snum = orders.SNUM
UNION ALL
SELECT salespeople.Snum, salespeople.Sname, orders.ONUM, orders.SNUM, orders.AMT
FROM salespeople
Right OUTER JOIN orders
ON salespeople.Snum = orders.SNUM
----------------------------------------------------
SELECT salespeople.Snum, salespeople.Sname, customer.CNUM, customer.CNAME
FROM salespeople
LEFT OUTER JOIN customer
ON salespeople.Snum = customer.SNUM
UNION ALL
SELECT salespeople.Snum, salespeople.Sname, customer.CNUM, customer.CNAME
FROM salespeople
RIGHT OUTER JOIN customer
ON salespeople.Snum = customer.SNUM