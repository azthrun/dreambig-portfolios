import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbp-aboutme',
  imports: [CommonModule,],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutMeComponent {
  private readonly appService = inject(AppService);

  public aboutMeSig = computed(() => this.appService.profileSig()?.aboutMe);
  public experiencesSig = computed(() => this.appService.profileSig()?.experiences);
}