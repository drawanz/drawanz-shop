import { Request, Response } from 'express';
import { IModel } from '../interfaces/IModel';
import { ICar } from '../interfaces/ICar';
import HttpStatusCodes from '../helpers/httpsStatusCode';

export default class CarController {
  private _service: IModel<ICar>;

  constructor(service: IModel<ICar>) { 
    this._service = service;
  }

  public async create(req: Request & { body: ICar }, res: Response) {
    const create = await this._service.create(req.body);
    return res.status(HttpStatusCodes.CREATED).json(create);
  }

  public async read(req: Request, res: Response) {
    const read = await this._service.read();
    return res.status(HttpStatusCodes.OK).json(read);
  }

  public async readOne(req: Request, res: Response) {
    const readOne = await this._service.readOne(req.params.id);
    return res.status(HttpStatusCodes.OK).json(readOne);
  }

  public async update(req: Request & { body: ICar }, res: Response) {
    const update = await this._service.update(req.params.id, req.body);
    return res.status(HttpStatusCodes.OK).json(update);
  }

  public async delete(req: Request & { body: ICar }, res: Response) {
    const deleteOne = await this._service.delete(req.params.id);
    return res.status(HttpStatusCodes.OK).json(deleteOne);
  }
}