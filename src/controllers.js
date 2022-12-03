import { StatusCodes } from 'http-status-codes';
import { populateSalesDbByMonthService } from './services.js';

export async function populateSalesDbByMonthController(request, response) {
  const { month } = request.query;

  await populateSalesDbByMonthService(month);

  response.status(StatusCodes.NO_CONTENT).end();
}
