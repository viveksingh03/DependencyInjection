import { Injectable } from '@angular/core';
import { LoggerService } from './logger.Service';
import { HeroService } from './hero.service';

@Injectable()
export class NewLoggerService {


    log() {
        console.log("New Logger Service");
    }
}



// let heroServiceFactory = (logger: LoggerService, heroService) => {
//     return new HeroService(logger, heroService.isAuthenticated);
// };

// export let HeroServiceProvider =
//     {
//         provide: HeroService,
//         useFactory: heroServiceFactory,
//         deps: [LoggerService, HeroService]
//     };

