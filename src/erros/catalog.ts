export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidId = 'InvalidId',
  InvalidIdLength = 'InvalidIdLength',
  ObjectNotFound = 'ObjectNotFound',
}

type ErrorResponseObject = {
  error: string,
  httpStatus: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Entity not found',
    httpStatus: 400,
  },
  InvalidId: {
    error: 'Not a valid ID',  
    httpStatus: 400,
  },
  InvalidIdLength: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  ObjectNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
};