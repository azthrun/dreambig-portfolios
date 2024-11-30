import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import environment from '../../environments/environment';
import { Profile } from '../types/profile.type';
import { Post } from '../types/post.type';

@Injectable()
export class AppService {
  private readonly httpClient = inject(HttpClient);
  private readonly configs = environment;

  private profileId: string = environment.profileId;
  private sessionId?: string;
  private headers = environment.dataClient;

  private fetchSessionId(): Signal<string | undefined> {
    var data$ = this.httpClient.post<{ id: string }>(`${this.configs.apiUrl}/sessions`, null, { headers: this.headers }).pipe(
      map((response) => {
        this.sessionId = response.id;
        return response.id;
      }),
      catchError((error) => {
        console.error('Error fetching session', error);
        this.sessionId = 'anonymous-session';
        return of("anonymous-session");
      }),
    );
    return toSignal(data$);
  }

  public profileSig = this.fetchProfile();
  private fetchProfile(): Signal<Profile | null | undefined> {
    if (this.sessionId === undefined) {
      this.fetchSessionId()();
    }
    const requestHeaders = { ...this.headers, 'Session-Id': this.sessionId ?? 'anonymous-session' };
    var data$ = this.httpClient.get<Profile>(`${this.configs.apiUrl}/profile`, { headers: requestHeaders }).pipe(
      catchError((error) => {
        console.error('Error fetching profile', error);
        return of(null);
      }),
    );
    return toSignal(data$);
  }

  public fetchPosts(): Signal<Post[] | undefined> {
    if (this.sessionId === undefined) {
      this.fetchSessionId()();
    }
    const requestHeaders = { ...this.headers, 'Session-Id': this.sessionId ?? 'anonymous-session' };
    var data$ = this.httpClient.get<Post[]>(`${this.configs.apiUrl}/postLists/${this.profileId}`, { headers: requestHeaders }).pipe(
      catchError((error) => {
        console.error('Error fetching posts', error);
        return of([]);
      }),
    );
    return toSignal(data$);
  }
}
