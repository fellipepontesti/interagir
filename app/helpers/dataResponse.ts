import { HttpContext } from '@adonisjs/core/build/standalone'
import { HttpResponse } from './errorResponse'

function dataResponse(context: HttpContext, statusCode: number, data: any): any {
  const defaultValue: HttpResponse = {
    success: true,
    statusCode,
    data,
  }

  return context.response.status(statusCode).json(defaultValue)
}

export default dataResponse
