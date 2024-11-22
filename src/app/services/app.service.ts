import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PageFeed } from '../types/page-feed.type';
import environment from '../../environments/environment';

@Injectable()
export class AppService {
  private readonly httpClient = inject(HttpClient);
  private readonly configs = environment;

  public dataSig = toSignal(this.getApplicationData('e4eaaaf2-d142-11e1-b3e4-080027620cdd'), { initialValue: undefined });
  private getApplicationData(id: string): Observable<PageFeed | null> {
    return this.httpClient.get<PageFeed>(`${this.configs.apiUrl}/data/${id}`).pipe(
      delay(700),
      catchError((error) => {
        console.error('Error fetching data', error);
        return of(null);
      }),
    );
  }
}
