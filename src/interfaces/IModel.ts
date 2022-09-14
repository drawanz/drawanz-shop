export interface IModel<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(obj: string): Promise<T | null>,
  update(objTwo: string, obj: T): Promise<T | null>,
  delete(obj: string): Promise<T | null>,
}