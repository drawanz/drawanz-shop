import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../erros/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    // dito que o erro está mapeado no nosso catálogo 
    // "mappedError" tem valores necessário para responder a requisição
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }
  console.error(err);
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;