import { StatusCodes } from 'http-status-codes';
import { populateSalesDbByMonthService, getSalesByMonthService } from './services.js';

export async function populateSalesDbByMonthController(request, response) {
  const { month } = request.query;

  await populateSalesDbByMonthService(month);

  response.status(StatusCodes.NO_CONTENT).end();
}

export async function getSalesByMonthController(request, response) {
  const { month } = request.query;

  const sales = await getSalesByMonthService(month);

  response.status(StatusCodes.OK).json(sales);
}
