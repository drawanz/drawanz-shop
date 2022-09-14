import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number()
    .gte(2, { message: 'Doors quantity must be greater or equal than 2' })
    .lte(4, { message: 'Doors quantity must be lesser or equal than 2' }),
  seatsQty: z.number()
    .gte(2, { message: 'Seats quantity must be greater or equal than 2' })
    .lte(7, { message: 'Seats quantity must be lesser or equal than 7' }),
});

export type ICar = z.infer<typeof CarZodSchema>;
export { CarZodSchema };