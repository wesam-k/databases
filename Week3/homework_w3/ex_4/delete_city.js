const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    await deleteCityByName(client, "Damascus");
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function deleteCityByName(client, cityName) {
  const result = await client
    .db("world")
    .collection("city")
    .deleteCity({ name: cityName });
  console.log(
    `New listing deleted with the following name: ${result.cityName}`
  );
}
