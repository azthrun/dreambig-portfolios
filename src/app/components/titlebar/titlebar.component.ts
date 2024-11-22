import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-titlebar',
  standalone: true,
  imports: [],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.scss'
})
export class TitlebarComponent {
  private readonly appService = inject(AppService);

  public portfolioOwner = computed(() => this.appService.dataSig()?.portfolioOwner);
}
