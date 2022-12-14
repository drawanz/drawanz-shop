import { ICar } from '../../interfaces/ICar';

export const idMock = "4edd40c86762e0fb12000003";
export const idMockLength = "6edd40c86762e0fb12000006"

export const carMockCreate: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carMockDelete: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carMockCreateReturn: ICar & { _id: string } = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
  _id: "4edd40c86762e0fb12000003"
};

export const carMockUpdated: ICar & { _id: string } = {
  model: "Ferrari Maranello",
  year: 1964,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
  _id: "4edd40c86762e0fb12000003"
}