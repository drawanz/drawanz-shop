import { Router, Request, Response } from 'express';
import CarController from '../controllers/Cars';
import CarService from '../services/Cars';
import CarModel from '../models/Cars';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/car', (req: Request, res: Response) =>
  carController.create(req, res));
route.get('/car', (res: Response) =>
  carController.read(res));
route.get('/car/:id', (req: Request, res: Response) =>
  carController.readOne(req, res));
route.put('/car/:id', (req: Request, res: Response) =>
  carController.update(req, res));
route.delete('/car/:id', (req: Request, res: Response) =>
  carController.delete(req, res));

export default route;