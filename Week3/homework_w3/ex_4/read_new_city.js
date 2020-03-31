const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    await findCityByName(client, "Damascus");
    await findCityByCountryCode(client, "SY");
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function findCityByName(client, cityName) {
  const result = await client
    .db("world")
    .collection("city")
    .find({ name: cityName });
  console.log(`New listing created with the following id: ${result.cityName}`);
}
async function findCityByCountryCode(client, CountryCode) {
  const result = await client
    .db("world")
    .collection("city")
    .findCity({ name: CountryCode });
  console.log(
    `New listing created with the following id: ${result.CountryCode}`
  );
}
