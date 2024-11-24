import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-aboutme',
  templateUrl: './aboutme.component.html',
})
export class AboutMeComponent {
  private readonly appService = inject(AppService);

  public aboutMeSig = computed(() => this.appService.profileSig()?.aboutMe);
  public experiencesSig = computed(() => this.appService.profileSig()?.experiences);
}