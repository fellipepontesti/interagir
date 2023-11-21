import { HttpContext } from '@adonisjs/core/build/standalone'

export interface HttpResponse {
  success: boolean
  statusCode: number
  data?: any
  error?: ErrorResponse
}

export interface ErrorResponse {
  type: string
  message: string
  errors?: string[]
}

function errorResponse(context: HttpContext, error: Error): any {
  const status = getStatus(error.name)
  let errorResponse: HttpResponse

  if (status === 500) {
    errorResponse = {
      statusCode: status,
      success: false,
      error: {
        type: 'InternalError',
        message: 'Internal Error',
      },
    }
  } else {
    errorResponse = mountJson(status, error)
  }

  return context.response.status(errorResponse.statusCode).json(errorResponse)
}

function getStatus(errorName: string): number {
  switch (errorName) {
    case 'UnauthorizedError':
      return 401

    case 'ForbiddenError':
      return 403

    case 'NotFoundError':
    case 'ValidationException':
    case 'UseCaseError':
    case 'ServiceError':
      return 400

    case 'NotAcceptableError':
      return 406

    default:
      return 500
  }
}

function mountJson(statusCode: number, error: any): HttpResponse {
  let message = error.messages
  let errors: string[] | undefined

  const value: HttpResponse = {
    statusCode,
    success: false,
    error: {
      type: error.name,
      message,
      errors,
    },
  }
  return value
}

export default errorResponse
