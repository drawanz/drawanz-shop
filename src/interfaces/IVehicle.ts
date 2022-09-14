import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required.',
    invalid_type_error: 'Model must be a string.',
  }).min(3, { message: 'Length must be greater than 3.' }),
  year: z.number({
    required_error: 'Year of manufactre is required.',
    invalid_type_error: 'Year must be a number.',
  })
    .gte(1900, { message: 'Must be greater than or equal to 1900.' })
    .lte(2022, { message: 'Must be lesser than or equal to 2022.' }),
  color: z.string({
    required_error: 'Color is required.',
    invalid_type_error: 'Color must be a string.',
  }).min(3, { message: 'Length must be greater than 3.' }),
  status: z.boolean({
    invalid_type_error: 'Status must be a boolean.',
  }).optional(),
  buyValue: z.number().int({ message: 'Only itegers.' }),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
export { VehicleZodSchema };