import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { AppService } from './services/app.service';
import { CommonModule } from '@angular/common';
import { NavlinksComponent } from './components/navlinks/navlinks.component';

@Component({
    selector: 'dbp-root',
    imports: [
        CommonModule,
        NavlinksComponent,
        RouterOutlet,
        TitlebarComponent,
    ],
    providers: [AppService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly appService = inject(AppService);

  public dataSig = this.appService.dataSig;
  public selfDescription = computed(() => this.appService.dataSig()?.selfDescription);
}
