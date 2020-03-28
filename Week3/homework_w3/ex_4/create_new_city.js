const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    await createNewCity(client, {
      id: 101,
      name: "Damascus",
      countryCode: "SY",
      distract: 1,
      population: 2320000
    });
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createNewCity(client, newCity) {
  const result = await client
    .db("world")
    .collection("city")
    .insertOne(newCity);
  console.log(`New listing created with the following id: ${result.newCity}`);
}
