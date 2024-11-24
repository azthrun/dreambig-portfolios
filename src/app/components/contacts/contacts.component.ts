import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  private readonly appService = inject(AppService);

  public contactsSig = computed(() => this.appService.profileSig()?.contacts);
}
