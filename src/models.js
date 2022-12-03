import { client, dbName } from './connection.js';

export async function insertSales(sales) {
  await client.connect();

  await Promise.all(sales.map((sale) => client
    .db(dbName)
    .collection('sales')
    .replaceOne({ date: sale.date, seller: sale.seller}, sale, { upsert: true })
  ));
    
  await client.close();
}

export async function getSalesByMonth(date) {
  await client.connect();

  const sales = await client
    .db(dbName)
    .collection('sales')
    .find({ date: { $regex: `^${date.substring(0, 7)}` } })
    .toArray();

  await client.close();

  return sales;
}
