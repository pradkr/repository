// This code example assigns the MongoClient variable using 
// object destructuring, introduced in Node.js v6. 
// You can create an instance of a MongoClient without using 
// object destructuring as shown in the following code:
// const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.MONGODB_URL;
dbName = 'test';
collectionName = 'grades';


async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName); //if not exist creates
    const collection = db.collection(collectionName); //if not exist creates
    
    // Insertion
    // //const insertLearner = { learner: 'John Doe',subject:'Math', score: 85};
    // const insertedLearner = await collection.insertOne({ learner: 'John Doe',subject:'Math', score: 85});
    // console.log("Successfully inserted");

    // Updation
    // const updateLearner = await collection.updateOne(
    //     { learner: 'John Doe'}, 
    //     { $set: { score: 90 } } 
    // );
    // console.log(updateLearner);

    // // Read
    // const fetchData = await collection.find({}).toArray();
    // console.log(fetchData);

    // // Delete
    // const deleteData = await collection.deleteOne({learner: "John Doe"})
    // console.log(deleteData);
    
    //insert many
    // const insertLearnersData = [
    //     { learner: 'John Doe',subject:'Math', score: 85},
    //     { learner: 'Jhonny',subject:'Science', score: 75},
    //     { learner: 'Peter',subject:'History', score: 65},
    //     { learner: 'Jill',subject:'English', score: 55},
    //     { learner: 'Will',subject:'Law', score: 45},
    // ];
    // const insertedLearners = await collection.insertMany(insertLearnersData);
    // console.log("Successfully inserted", insertedLearners);

    // //find who scored above 80
    // const learnerData80Plus = await collection.find({score: {$gt: 80}} ).toArray();
    // console.log("Above 80 scorers \n", learnerData80Plus);

    // //avg score of all learners
    // const avgScoreLearnerData = await collection.aggregate( [{ $group: {_id: null, averageScore:{$avg:"$score"} } }] ).toArray();
    // console.log("Average is ",avgScoreLearnerData);

    // update multiple
    // const updateMultiple = await collection.updateMany(
    //     {score: 85},{$inc: {score:5}}  );
    // console.log("updateMultiple ",updateMultiple);

    //Delete many
    const deleteMultiple = await collection.deleteMany(
             {score: {$lt: 55}}  );
    console.log("deleteMultiple ",deleteMultiple);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.error);


