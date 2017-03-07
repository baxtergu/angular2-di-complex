// import { Injectable } from '@angular/core';
import { LargeService } from './large.service';
import { SmallService } from './small.service';

// @Injectable()
export class ViewPortService {

  constructor() { }
  determineService(): any {
    let w: number = Math.max(document.documentElement.clientWidth,
      window.innerWidth || 0);

    if (w < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}
