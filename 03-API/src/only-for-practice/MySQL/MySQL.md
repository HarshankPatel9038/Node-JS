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