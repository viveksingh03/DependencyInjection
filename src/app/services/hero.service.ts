import { Injectable } from '@angular/core';
import { LoggerService } from './logger.Service';

@Injectable()
export class HeroService {

  constructor(private logger: LoggerService) {
  }

  isAuthenticated: boolean = true;
  getData() {

  }

}




@Injectable()
export class FactoryHeroService {

  constructor() {
  }


}