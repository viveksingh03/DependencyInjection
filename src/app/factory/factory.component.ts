import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.Service';
import { HeroService, FactoryHeroService } from '../services/hero.service';

export let heroServiceFactory = (logger: LoggerService, heroService) => {
  return new HeroService(logger);
};

export let HeroServiceProvider =
  {
    provide: FactoryHeroService,
    useFactory: heroServiceFactory,
    deps: [LoggerService, HeroService]
  };




@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
  providers: [HeroServiceProvider]
})
export class FactoryComponent implements OnInit {

  constructor(private f: FactoryHeroService) {
  }
  ngOnInit() {


  }

}


