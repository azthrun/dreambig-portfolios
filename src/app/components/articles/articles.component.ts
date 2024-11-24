import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent {
  private readonly appService = inject(AppService);

  public postListSig = this.appService.fetchPostLists();
}