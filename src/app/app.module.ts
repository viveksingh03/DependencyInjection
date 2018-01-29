import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.Service';
import { HeroService } from './services/hero.service';
import { EvenBetterLoggerService } from './services/even-better-logger.service';
import { OldHeroService } from './services/old-hero.service';
import { NewLoggerService } from './services/new.logger.service';
import { silentLogger, ValueProviderService } from './services/value.provider.service';
import { FactoryComponent } from './factory/factory.component';


@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HeroService,
    LoggerService,
    { provide: LoggerService, useClass: EvenBetterLoggerService },
    { provide: ValueProviderService, useValue: silentLogger }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// { provide: OldHeroService, useExisting: NewLoggerService }