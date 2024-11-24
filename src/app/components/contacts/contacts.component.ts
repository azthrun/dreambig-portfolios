import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  private readonly appService = inject(AppService);

  public contactsSig = computed(() => this.appService.profileSig()?.contacts);
}
