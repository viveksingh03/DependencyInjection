// An object in the shape of the logger service
export function SilentLoggerFn() { }

export const silentLogger = {
    logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
    log: SilentLoggerFn
};

  

import { Injectable } from '@angular/core';
@Injectable()
export class ValueProviderService {
}