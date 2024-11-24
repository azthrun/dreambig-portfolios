import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'dbp-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  private readonly appService = inject(AppService);

  public postListSig = this.appService.fetchPostLists();
}