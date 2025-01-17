import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, DeleteCarDto, UpdateCarDto } from './dto/';
import { v7 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Chevrolet',
    //   model: 'Onix Active',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} does not exist`);
    }
    return car;
  }

  create( createCarDto: CreateCarDto){
    const newCar: Car = {
      id: uuid(),
      //this is one way to do this
      // brand: createCarDto.brand,
      // model: createCarDto.model

      //and this is another more pro
      ...createCarDto
    }

    this.cars.push(newCar);
    
    return newCar;
  }

  update( id: string, updateCarDto: UpdateCarDto ){

    let carBD = this.findOneById( id );

    if( updateCarDto.id && updateCarDto.id !== id )
      throw new BadRequestException(`car id is not valid`)

    this.cars = this.cars.map( car => {
      if( car.id === id )
      {
        carBD = {...carBD, ...updateCarDto, id}
        return carBD;
      }

      return car;
    })
    return carBD;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarswithSeedData( cars: Car[] )
  {
    this.cars = cars;
  }
}
