import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Link } from 'src/app/interfaces/link';
import { LinkResponse } from 'src/app/interfaces/link-response';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  private apiURL = '';
  constructor(private http: HttpClient) {}

  shorten(longLink: string): Observable<Link> {
    return this.http.get<LinkResponse>(`${this.apiURL}`).pipe(
      map((linkResponse: LinkResponse) => {
        return linkResponse.result;
      })
    );
  }
}
