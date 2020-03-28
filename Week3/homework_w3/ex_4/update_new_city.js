const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    await updateCityByName(
      client,
      { name: "Damascus" },
      { population: 3000000 }
    );
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function updateCityByName(client, cityName, updatePopulation) {
  const result = await client
    .db("world")
    .collection("city")
    .updateOne({ name: cityName }, { $set: updatePopulation });
  console.log(
    `New listing updated with the following name: ${result.cityName}`
  );
}
