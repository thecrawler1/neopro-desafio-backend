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
