import { Component, Inject, ReflectiveInjector } from '@angular/core';
import { ApiService } from './services/api.service';
import { ViewPortService } from './services/view-port.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService,
    @Inject('ApiServiceAlias') private aliasService: ApiService,
    @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.determineService();
        },
        deps: [ViewPortService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }
}
