import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { catchError, delay, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Profile } from '../types/profile.type';
import environment from '../../environments/environment';
import { PostList } from '../types/post.type';

@Injectable()
export class AppService {
  private readonly httpClient = inject(HttpClient);
  private readonly configs = environment;

  private profileId: string = this.fetchProfileId();
  private fetchProfileId(): string {
    // TODO: Implement logic to fetch profile ID from Cookie or LocalStorage
    return 'e4eaaaf2-d142-11e1-b3e4-080027620cdd';
  }

  public profileSig = this.fetchProfile();
  private fetchProfile(): Signal<Profile | null | undefined> {
    var data$ = this.httpClient.get<Profile>(`${this.configs.apiUrl}/profiles/${this.profileId}`).pipe(
      delay(700),
      catchError((error) => {
        console.error('Error fetching profile', error);
        return of(null);
      }),
    );
    return toSignal(data$);
  }

  public fetchPostLists(): Signal<PostList | undefined> {
    var data$ = this.httpClient.get<PostList>(`${this.configs.apiUrl}/postLists/${this.profileId}`).pipe(
      delay(700),
      catchError((error) => {
        console.error('Error fetching posts', error);
        return of({
          id: this.profileId,
          profileId: this.profileId,
          posts: [],
        });
      }),
    );
    return toSignal(data$);
  }
}
