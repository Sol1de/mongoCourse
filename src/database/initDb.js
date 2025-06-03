if (typeof db === 'undefined') {
  throw new Error('db is not defined. This script must be run by the MongoDB init process.');
}

db = db.getSiblingDB('bookstore');

db.createUser({
  user: "root",
  pwd: "root",
  roles: [
    { role: "readWrite", db: "bookstore" },
    { role: "dbAdmin", db: "bookstore" },
    { role: "userAdmin", db: "bookstore" }
  ]
});

db.test.insertOne({init: true});

print("Database bookstore & user root créés !");