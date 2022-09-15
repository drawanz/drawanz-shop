import { ErrorTypes } from '../erros/catalog';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService implements IModel<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parseParam = CarZodSchema.safeParse(obj);
    if (!parseParam.success) {
      throw parseParam.error;
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(obj: string): Promise<ICar> {
    if (obj.length < 23) {
      throw new Error(ErrorTypes.InvalidIdLength);
    }
    const read = await this._car.readOne(obj);
    if (!read) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
    return read;
  }

  public async update(objTwo: string, obj: ICar): Promise<ICar | null> {
    if (objTwo.length < 23) {
      throw new Error(ErrorTypes.InvalidIdLength);
    }
    const parseParam = CarZodSchema.safeParse(obj);
    if (!parseParam.success) {
      throw parseParam.error;
    }
    const updateItem = await this._car.update(objTwo, obj);
    if (!updateItem) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
    return updateItem;
  }

  public async delete(obj: string): Promise<ICar | null> {
    if (obj.length < 23) {
      throw new Error(ErrorTypes.InvalidIdLength);
    }
    const deleteOne = await this._car.delete(obj);
    if (!deleteOne) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }
    return deleteOne;
  }
}