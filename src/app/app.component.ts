import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { AppService } from './services/app.service';
import { NavlinksComponent } from './components/navlinks/navlinks.component';
import { LoadingComponent } from './components/loading/loading.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dbp-root',
  imports: [
    LoadingComponent,
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
  private readonly titleService = inject(Title);

  public profileSig = this.appService.profileSig;
  public selfDescription = computed(() => {
    this.titleService.setTitle(`Portfolio - ${this.appService.profileSig()?.portfolioOwner}`);
    return this.appService.profileSig()?.selfDescription
  });
}
