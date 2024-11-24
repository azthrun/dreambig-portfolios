import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'dbp-titlebar',
    templateUrl: './titlebar.component.html',
})
export class TitlebarComponent {
  private readonly appService = inject(AppService);

  public portfolioOwner = computed(() => this.appService.profileSig()?.portfolioOwner);
}
