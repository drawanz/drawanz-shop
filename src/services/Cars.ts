import ErrorException from '../erros/errorException';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import HttpStatusCodes from '../helpers/httpsStatusCode';

export default class CarService implements IModel<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parseParam = CarZodSchema.safeParse(obj);
    if (!parseParam.success) {
      throw new ErrorException(HttpStatusCodes.BAD_REQUEST, parseParam.error as unknown as string);
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(obj: string): Promise<ICar> {
    const read = await this._car.readOne(obj);
    if (!read) {
      throw new ErrorException(400, 'Entity not found');
    }
    return read;
  }

  public async update(objTwo: string, obj: ICar): Promise<ICar | null> {
    const parseParam = CarZodSchema.safeParse(obj);
    if (!parseParam.success) {
      throw new ErrorException(HttpStatusCodes.BAD_REQUEST, parseParam.error as unknown as string);
    }
    const updateItem = await this._car.update(objTwo, obj);
    return updateItem;
  }

  public async delete(obj: string): Promise<ICar | null> {
    return this._car.delete(obj);
  }
}