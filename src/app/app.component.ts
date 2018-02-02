import { Component } from '@angular/core';
import { OldHeroService } from './services/old-hero.service';
import { LoggerService } from './services/logger.Service';
import { ValueProviderService } from './services/value.provider.service';
import { HeroService } from './services/hero.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // constructor(private oldService: OldHeroService) {
  //   this.oldService.log();
  // }

  // constructor(private s: LoggerService, private oldService: OldHeroService) {
  constructor() {
    // s.log('asgdfgsd');


    // console.log(this.valueService);

    // oldService.log();
   
  }
}


