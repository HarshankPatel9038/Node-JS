Download MongoDB
Command Line Database Tools


Environment Variable
G:\<folder_path>\mongodb\mongodb-database-tools-windows-x86_64-100.9.4\bin


Export:
mongodump --uri="URL" --db="demo"

Import:
mongorestore
--uri="URL"
--nsInclude="demo1.*" dump

make sure to rename directory demo to demo1 (new db) if want to create new name db