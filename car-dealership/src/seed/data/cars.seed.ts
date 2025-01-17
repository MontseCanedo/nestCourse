import { Car } from "src/cars/interfaces/car.interface";
import { v7 as uuid} from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Onix active'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Wrangler'
    },
    {
        id: uuid(),
        brand: 'Suzuki',
        model: 'Jimny'
    },

]