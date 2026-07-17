
// =========================
// 📌 MongoDB Cheat Sheet (Complete)
// =========================

// -------------------------
// 1. Database Management
// -------------------------
show dbs                     // Show all databases
use <dbname>                 // Switch or create DB
db                           // Current database
db.dropDatabase()            // Delete current database
db.stats()                   // Get database stats
db.getCollectionNames()      // List all collections

// -------------------------
// 2. Collection Management
// -------------------------
db.createCollection("users", { capped: true, size: 10000 }) // Create capped collection
db.getCollection("users")                                  // Access collection
db.users.drop()                                            // Drop collection
db.users.stats()                                           // Collection stats

// -------------------------
// 3. CRUD Operations
// -------------------------
// Insert
db.users.insertOne({ name: "Ali", age: 21 })
db.users.insertMany([{ name: "Sara" }, { name: "Ahmed" }])

// Find
db.users.find({})                     // All docs
db.users.findOne({ name: "Ali" })     // One doc
db.users.find({ age: { $gte: 20 } })  // Condition
db.users.find({}, { name: 1, age: 1 }) // Projection (select fields)

// Update
db.users.updateOne({ name: "Ali" }, { $set: { age: 23 } })
db.users.updateMany({ city: "Lahore" }, { $inc: { age: 1 } })
db.users.replaceOne({ name: "Sara" }, { name: "Sara", age: 25 })

// Delete
db.users.deleteOne({ name: "Ali" })
db.users.deleteMany({ inactive: true })

// -------------------------
// 4. Query Operators (Advanced)
// -------------------------
$eq, $ne, $gt, $gte, $lt, $lte
$in, $nin
$and, $or, $not, $nor
$exists, $type
$regex, $text, $where
$all, $elemMatch, $size

// -------------------------
// 5. Update Operators (Advanced)
// -------------------------
$set, $unset, $inc, $mul
$rename, $currentDate
$min, $max
$push, $pop, $pull, $pullAll, $addToSet, $each, $position

// -------------------------
// 6. Aggregation Pipeline
// -------------------------
db.orders.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 5 }
])

// Key Stages:
$match, $group, $sort, $project, $unwind, $lookup, $limit, $skip, $out, $merge, $count, $addFields

// -------------------------
// 7. Indexing
// -------------------------
db.users.createIndex({ name: 1 })          
db.users.createIndex({ email: 1 }, { unique: true })  
db.users.getIndexes()                      
db.users.dropIndex("name_1")               
db.users.createIndex({ location: "2dsphere" }) 

// -------------------------
// 8. Text Search
// -------------------------
db.articles.createIndex({ content: "text" })
db.articles.find({ $text: { $search: "mongodb" } })

// -------------------------
// 9. Transactions
// -------------------------
const session = db.getMongo().startSession()
session.startTransaction()
try {
  session.getDatabase("shop").orders.insertOne({ item: "Book" })
  session.getDatabase("shop").inventory.updateOne({ item: "Book" }, { $inc: { stock: -1 } })
  session.commitTransaction()
} catch (e) {
  session.abortTransaction()
}
session.endSession()

// -------------------------
// 10. Admin & Security
// -------------------------
db.createUser({
  user: "student",
  pwd: "password123",
  roles: [{ role: "readWrite", db: "mydb" }]
})
db.dropUser("student")
db.getUsers()
db.getRole("readWrite")

// -------------------------
// 11. Backup & Restore (Shell)
// -------------------------
mongodump --db=mydb --out=/backup/     
mongorestore --db=mydb /backup/mydb    

// -------------------------
// 12. Utilities
// -------------------------
db.serverStatus()    
db.currentOp()       
db.killOp(opid)      
db.isMaster()        
