import { Brand } from "src/brands/entities/brand.entity";
import { v7 as uuid} from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Suzuki',
        createdAt: new Date().getTime()
    },

]