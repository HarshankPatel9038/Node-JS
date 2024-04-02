/* The provided JSON data represents an array of objects, where each object contains information about
a user. Each user object includes properties such as `_id`, `name`, `age`, `city`, `gender`,
`posts`, `friends`, `skills`, and `isActive`. */
[
  {
    "_id": 1,
    "name": "John Doe",
    "age": 28,
    "city": "New York",
    "gender": "Male",
    "posts": [
      { "title": "Post 1", "likes": 15, "comments": ["Great post!", "Interesting"] },
      { "title": "Post 2", "likes": 20, "comments": ["Well done"] }
    ],
    "friends": [2, 3],
    "skills": ["JavaScript", "React", "Node.js"],
    "isActive": true
  },
  {
    "_id": 2,
    "name": "Alice Johnson",
    "age": 32,
    "city": "Los Angeles",
    "gender": "Female",
    "posts": [
      { "title": "Post 3", "likes": 10, "comments": ["Nice!", "Awesome"] },
      { "title": "Post 4", "likes": 25, "comments": ["Impressive"] }
    ],
    "friends": [1, 3],
    "skills": ["Python", "Django", "JavaScript"],
    "isActive": true
  },
  {
    "_id": 3,
    "name": "Bob Williams",
    "age": 24,
    "city": "New York",
    "gender": "Male",
    "posts": [
      { "title": "Post 5", "likes": 18, "comments": ["Keep it up"] },
      { "title": "Post 6", "likes": 22, "comments": ["Awesome"] }
    ],
    "friends": [1, 2],
    "skills": ["Java", "Spring Boot", "JavaScript"],
    "isActive": false
  },
  {
    "_id": 4,
    "name": "Diana Brown",
    "age": 30,
    "city": "San Francisco",
    "gender": "Female",
    "posts": [
      { "title": "Post 7", "likes": 12, "comments": ["Interesting"] },
      { "title": "Post 8", "likes": 30, "comments": ["Well done", "Great post!"] }
    ],
    "friends": [5, 6],
    "skills": ["React", "Node.js", "MongoDB"],
    "isActive": true
  },
  {
    "_id": 5,
    "name": "Elijah Wilson",
    "age": 26,
    "city": "Los Angeles",
    "gender": "Male",
    "posts": [
      { "title": "Post 9", "likes": 14, "comments": ["Nice!"] },
      { "title": "Post 10", "likes": 18, "comments": ["Impressive"] }
    ],
    "friends": [4, 6],
    "skills": ["JavaScript", "Vue.js", "Express.js"],
    "isActive": false
  },
  {
    "_id": 6,
    "name": "Fiona Miller",
    "age": 29,
    "city": "San Francisco",
    "gender": "Female",
    "posts": [
      { "title": "Post 11", "likes": 22, "comments": ["Awesome"] },
      { "title": "Post 12", "likes": 25, "comments": ["Great post!"] }
    ],
    "friends": [4, 5],
    "skills": ["React", "Angular", "Node.js"],
    "isActive": true
  },
  {
    "_id": 7,
    "name": "George Taylor",
    "age": 35,
    "city": "Los Angeles",
    "gender": "Male",
    "posts": [
      { "title": "Post 13", "likes": 18, "comments": ["Keep it up"] },
      { "title": "Post 14", "likes": 20, "comments": ["Awesome"] }
    ],
    "friends": [8, 9],
    "skills": ["Python", "Flask", "Django"],
    "isActive": false
  },
  {
    "_id": 8,
    "name": "Hannah Robinson",
    "age": 27,
    "city": "San Francisco",
    "gender": "Female",
    "posts": [
      { "title": "Post 15", "likes": 15, "comments": ["Nice!", "Interesting"] },
      { "title": "Post 16", "likes": 28, "comments": ["Well done"] }
    ],
    "friends": [7, 9],
    "skills": ["JavaScript", "React", "Vue.js"],
    "isActive": true
  },
  {
    "_id": 9,
    "name": "Isaac Moore",
    "age": 31,
    "city": "Portland",
    "gender": "Male",
    "posts": [
      { "title": "Post 17", "likes": 10, "comments": ["Nice!", "Impressive"] },
      { "title": "Post 18", "likes": 22, "comments": ["Great post!"] }
    ],
    "friends": [7, 8],
    "skills": ["Node.js", "Express.js", "MongoDB"],
    "isActive": false
  },
  {
    "_id": 10,
    "name": "Jasmine Hill",
    "age": 23,
    "city": "Portland",
    "gender": "Female",
    "posts": [
      { "title": "Post 19", "likes": 18, "comments": ["Keep it up", "Awesome"] },
      { "title": "Post 20", "likes": 25, "comments": ["Interesting"] }
    ],
    "friends": [9, 7],
    "skills": ["Java", "Spring Boot", "JavaScript"],
    "isActive": true
  }
]

01.
/* `show dbs` is a command in MongoDB that is used to display a list of all the databases present in the current MongoDB server. It does not require any specific query criteria and simply shows a list of available databases. */
show dbs

02.
/* The command `use demo` is used in MongoDB to switch to a specific database named "demo". This command tells the MongoDB shell to start using the "demo" database for subsequent operations like querying, inserting, updating, or deleting data. If the "demo" database does not exist, MongoDB will create it when you start adding data to it. */
use demo

03.
/* The `cls` command is not a valid command in MongoDB. It seems like it might be intended to clear the console screen, but in MongoDB shell, there is no built-in command like `cls` for clearing the screen. If you are looking to clear the screen in the MongoDB shell, you can typically use the keyboard shortcut `Ctrl + L` to clear the screen and display a fresh prompt. */
cls

04.
/* The query `db.users.insertOne({name: 'Amit', age: 34})` is inserting a new document into the "users" collection in the MongoDB database. The document being inserted has two fields: "name" with the value 'Amit' and "age" with the value 34. This operation will add this new document to the collection. */
db.users.insertOne({ name: 'Amit', age: 34 })

05.
/* The query `db.users.insertMany([{name: 'Amit', age: 34},{name: 'Sachin', age: 25},{name: 'Dhaval', age: 20}])` is inserting multiple documents into the "users" collection in the MongoDB database. */
db.users.insertMany([{ name: 'Amit', age: 34 }, { name: 'Sachin', age: 25 }, { name: 'Dhaval', age: 20 }])

06.
/* `db.users.find()` is a query in MongoDB that retrieves all documents from the "users" collection. When executed, it returns a cursor to the documents that match the query criteria, which in this case is empty `{}` meaning it will return all documents in the collection. */
db.users.find()

07.
/* The query `db.users.find({name: 'Amit'})` is searching for and retrieving all documents from the "users" collection in the MongoDB database where the value of the "name" field is equal to 'Amit'. It will return a cursor to the documents that match this specific query criteria, in this case, documents where the name is 'Amit'. */
db.users.find({ name: 'Amit' })

08.
/* The query `db.users.find({}, {age: 0})` is finding and retrieving all documents from the "users" collection in the MongoDB database, but it is excluding the "age" field from the returned documents. The second parameter `{age: 0}` in the `find()` method specifies that the "age" field should not be included in the output. This means that the query will return all documents without the "age" field in the result. */
db.users.find({}, { age: 0 })

09.
/* The above code is a MongoDB query using the `find` method to retrieve all documents from the `users` collection, but only returning the `name` field for each document. */
db.users.find({}, { name: 1 })

10.
/* The above code is a MongoDB query using the `find` method to retrieve all documents from the `users` collection, but only returning the `name` field for each document. The `_id` field is excluded from the results using `{_id: 0}` in the projection. */
db.users.find({}, { _id: 0, name: 1 })

11.
/* The above code is a MongoDB query written in JavaScript syntax. It is querying the "users" collection in the database to find documents where the "name" field is equal to 'Sachin'. It is projecting the "age" field of the matching documents while excluding the "_id" field from the results. */
db.users.find({ name: 'Sachin' }, { _id: 0, age: 1 })

12.
/* The query `db.users.find().limit(2)` is retrieving documents from the "users" collection in the MongoDB database, but it is limiting the result to only return the first 2 documents that match the query criteria. This means that it will fetch and display only the first two documents found in the collection based on the default sorting order. */
db.users.find().limit(2)

13.
/* The query `db.users.find().sort({name: -1})` is sorting the documents retrieved from the "users" collection in the MongoDB database based on the field "name" in descending order. The `-1` in the `sort()` method indicates descending order, so the documents will be sorted by the "name" field in reverse alphabetical order. */
db.users.find().sort({ name: -1 })

14.
/* The query `db.users.find().limit(2).skip(1)` is retrieving documents from the "users" collection in the MongoDB database. It first limits the result to return only 2 documents based on the query criteria. Then, it skips the first document and returns the next document after skipping one document. In this case, it will fetch and display the second document found in the collection based on the default sorting order after skipping the first one. */
db.users.find().limit(2).skip(1)

15.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the "age" field is not equal to 22. */
db.users.find({ age: { $ne: 22 } })

16.
/* The above code is a MongoDB query written in JavaScript syntax. It is querying the "users" collection in the database to find all documents where the value of the "name" field is not equal to 'Dhaval'. */
db.users.find({ name: { $ne: 'Dhaval' } })

17.
/* The above code is a MongoDB query written in JavaScript syntax. It is searching for a user in the "users" collection where the name field is equal to 'Dhaval'. */
db.users.find({ name: { $eq: 'Dhaval' } })

18.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the value of the "age" field is greater than 22. */
db.users.find({ age: { $gt: 22 } })

19.
/* The above code is a MongoDB query using the `find` method to retrieve all documents from the `users` collection where the `name` field is greater than 'D'. */
db.users.find({ name: { $gt: 'D' } })

20.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the "age" field is greater than or equal to 22. */
db.users.find({ age: { $gte: 22 } })

21.
/* The above code is a MongoDB query using the `find` method to retrieve all documents from the `users` collection where the `age` field is less than 22. */
db.users.find({ age: { $lt: 22 } })

22.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the value of the "age" field is less than or equal to 22. */
db.users.find({ age: { $lte: 22 } })

23.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all users in the "users" collection where the "status" field is not equal to "offline". */
db.users.find({ status: { $nin: ['offline'] } })

24.
/* The above code is a MongoDB query written in JavaScript syntax. It is searching for users in the "users" collection where the "status" field is equal to "offline". The  operator is used to match any documents where the "status" field contains the value "offline". */
db.users.find({ status: { $in: ['offline'] } })

25.
/* The above code is a MongoDB query using the `find` method to retrieve documents from the `users` collection where the `age` field is less than or equal to 10 or greater than or equal to 12. This query uses the logical OR operator `` to specify multiple conditions. */
db.users.find({ $or: [{ age: { $lte: 10 } }, { age: { $gte: 12 } }] })

26.
/* The above code is a MongoDB query using the `find` method to retrieve users from the `users` collection where the `age` field is not less than or equal to 10 and not greater than or equal to 12. This query is using the `` operator to specify that both conditions must be true for a document to be included in the result. */
db.users.find({ $nor: [{ age: { $lte: 10 } }, { age: { $gte: 12 } }] })

27.
/* The above code is a MongoDB query using the `find` method to search for users in the `users` collection where the age is less than or equal to 10 and the name is greater than or equal to 'D'. */
db.users.find({ $and: [{ age: { $lte: 10 } }, { name: { $gte: 'D' } }] })

28.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the "age" field is not equal to 29. The  operator is used to negate the equality condition. */
db.users.find({ age: { $not: { $eq: 29 } } })

29.
/* The above code is a MongoDB query written in JavaScript syntax. It is finding all documents in the "users" collection where the "isActive" field exists. */
db.users.find({ isActive: { $exists: true } })

30.
/* The above code is a MongoDB query that is searching for documents in the "users" collection where the "isActive" field exists and is equal to true. */
db.users.find({ isActive: { $exists: true, $eq: true } })

31.
/* The above code is a MongoDB query using the `find` method to retrieve users where the value of the field "age1" is greater than the value of the field "age2". The `` operator allows the use of aggregation expressions within the query. */
db.users.find({ $expr: { $gt: ["age1", "age2"] } })

32.
/* The query `db.users.findOne({full_name: "Hannah Robinson"})` is finding and returning the first document in the "users" collection where the value of the "full_name" field is equal to "Hannah Robinson".It will return the document that matches this criteria. */
db.users.findOne({ full_name: "Hannah Robinson" })

33.
/* The query `db.users.countDocuments({name: 'Iker Córdoba'})` is counting the number of documents in the "users" collection where the value of the "name" field is equal to 'Iker Córdoba'.It will return the count of such documents that match the specified criteria. */
db.users.countDocuments({ name: 'Iker Córdoba' })

34.
/* The query `db.users.find({age: {: 18, : 25}})` is finding and returning all documents in the "users" collection where the value of the "age" field is greater than or equal to 18 and less than or equal to 25. It will return all documents that match this age range criteria. */
db.users.find({ age: { $gte: 18, $lte: 25 } })

35.
/* The query `db.users.updateOne({ name: 'Hannah Robinson' }, { : { age: 28 } })` is updating a single document in the "users" collection where the value of the "name" field is equal to 'Hannah Robinson'. It is setting the value of the "age" field in that document to 28. This operation will only update the first document that matches the specified criteria. */
db.users.updateOne({ name: 'Hannah Robinson' }, { $set: { age: 28 } })

36.
/* The query `db.users.updateMany({}, { : { name: 'full_name' } })` is updating all documents in the "users" collection by renaming the field "name" to "full_name". This operation will apply the field renaming to all documents in the collection. */
db.users.updateMany({}, { $rename: { name: 'full_name' } })

37.
/* This query `db.users.updateMany({ full_name: "Hannah Robinson" }, { : { address: "surat" } })` is updating multiple documents in the "users" collection where the value of the "full_name" field is equal to "Hannah Robinson". It is pushing the value "surat" into the "address" array field for all documents that match the specified criteria. */
db.users.updateMany({ full_name: "Hannah Robinson" }, { $push: { address: "surat" } })

38.
/* This query `db.users.updateMany({ full_name: "Hannah Robinson" }, { : { address: "surat" } })` is updating multiple documents in the "users" collection where the value of the "full_name" field is equal to "Hannah Robinson". It is removing the value "surat" from the "address" array field for all documents that match the specified criteria. */
db.users.updateMany({ full_name: "Hannah Robinson" }, { $pull: { address: "surat" } })

39.
/* This query `db.users.updateMany({ full_name: "Hannah Robinson" }, { : { address: "" } })` is updating multiple documents in the "users" collection where the value of the "full_name" field is equal to "Hannah Robinson". It is unsetting (removing) the "address" field from all documents that match the specified criteria. */
db.users.updateMany({ full_name: "Hannah Robinson" }, { $unset: { address: "" } })

40.
/* This query `db.users.updateMany({ full_name: "Hannah Robinson" }, { : { age: 1 } })` is updating multiple documents in the "users" collection where the value of the "full_name" field is equal to "Hannah Robinson". It is incrementing the value of the "age" field by 1 for all documents that match the specified criteria. */
db.users.updateMany({ full_name: "Hannah Robinson" }, { $inc: { age: 1 } })

41.
/* This query `db.users.updateOne({full_name: "Amit"}, {: {age: 25, city: "Surat"}}, {upsert:true})` is updating a single document in the "users" collection where the value of the "full_name" field is equal to "Amit". If no document matching this criteria is found, it will insert a new document with the specified fields `age` set to 25 and `city` set to "Surat". The `{upsert:true}` option indicates that if no document matches the query, a new document will be created with the specified fields. */
db.users.updateOne({ full_name: "Amit" }, { $set: { age: 25, city: "Surat" } }, { upsert: true })
