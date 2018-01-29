import { Injectable } from '@angular/core';
import { LoggerService } from './logger.Service';
import { log } from 'util';
import { HeroService } from './hero.service';

@Injectable()
export class EvenBetterLoggerService extends LoggerService {

  constructor() {
    super();
  }

  log(message: string) {
    console.log('EvenBetterLoggerService');
  }




}
