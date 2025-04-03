const { MongoClient } = require('mongodb');

// Task 1: Define drivers array
const drivers = [
  {
    name: "John Doe",
    vehicleType: "Sedan",
    isAvailable: true,
    rating: 4.8
  },
  {
    name: "Alice Smith",
    vehicleType: "SUV",
    isAvailable: false,
    rating: 4.5
  }
];

// Task 2.2: Add New Driver
const newDriver = {
  name: "Miranda Jayson",
  vehicleType: "Hatchback",
  isAvailable: true,
  rating: 4.9
};
drivers.push(newDriver);

// Task 2.1: Show only the drivers' names
console.log("Driver Names:");
drivers.forEach(driver => {
  console.log(driver.name);
});

// Show all data in console
console.log("\nAll Drivers Data:");
console.log(drivers);

// Task 3 - 6: MongoDB Operations
async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("testDB");
    const driversCollection = db.collection("drivers");

    // Task 3: Insert Drivers
    for (const driver of drivers) {
      const result = await driversCollection.insertOne(driver);
      console.log(`New driver created with ID: ${result.insertedId}`);
    }

    // Task 4: Query available drivers with rating >= 4.5
    const availableDrivers = await driversCollection.find({
      isAvailable: true,
      rating: { $gte: 4.5 }
    }).toArray();
    console.log("\nAvailable drivers with rating >= 4.5:");
    console.log(availableDrivers);

    // Task 5: Update John Doe's rating
    const updateResult = await driversCollection.updateOne(
      { name: "John Doe" },
      { $inc: { rating: 0.1 } }
    );
    console.log(`\nDriver updated: ${updateResult.modifiedCount} document(s)`);

    // Task 6: Delete driver Alice Smith
    const deleteResult = await driversCollection.deleteOne({ name: "Alice Smith" });
    console.log(`Driver deleted: ${deleteResult.deletedCount} document(s)`);

  } finally {
    await client.close();
  }
}

main().catch(console.error);
