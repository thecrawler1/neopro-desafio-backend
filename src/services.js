import got from 'got';
import moment from 'moment';
import { insertSales, getSalesByMonth } from './models.js';

export async function populateSalesDbByMonthService(date) {
  const sales = await getApiSales(date);
  const salesByDay = reduceSalesByDay(sales);

  await insertSales(salesByDay);
}

export async function getSalesByMonthService(date) {
  const sales = await getSalesByMonth(date);

  return groupSalesByDate(sales);
}

async function getApiSales(date) {
  // to fix the api returning the next month
  const month = moment(date).subtract(1, 'M').format('YYYY-MM');

  const urlApiNeopro = `https://api.neopro.com.br/v1/test/sales?month=${month}`;
  const response = await got(urlApiNeopro);

  return JSON.parse(response.body);
}

function reduceSalesByDay(sales) {
  const salesByDay = sales.reduce((accumulator, sale) => {
    const date = moment(sale.date).format('YYYY-MM-DD[T00:00:00.000Z]')

    accumulator[date] = {
      date,
      seller: sale.seller,
      sold: sale.sold + (accumulator[date]?.sold || 0),
      sales: 1 + (accumulator[date]?.sales || 0),
    };

    return accumulator;
  }, {});

  return Object.keys(salesByDay).map((date) => salesByDay[date]);
}

function groupSalesByDate(sales) {
  const sellersByDate = sales.reduce((acc, sale) => {
    if (!(sale.date in acc)) {
      acc[sale.date] = [];
    }

    acc[sale.date].push({
      seller: sale.seller,
      sold: sale.sold,
      sales: sale.sales,
    });

    return acc;
  }, {});

  return Object.keys(sellersByDate).map((date) => ({ date, sellers: sellersByDate[date] }));
}
