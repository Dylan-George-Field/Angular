import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from './video';

@Injectable()
export class VideoService {

  private videoUrl = 'api/heroes'; //api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getVideos(): Promise<Video[]> {
    return this.http.get(this.videoUrl)
             .toPromise()
             .then(response => response.json().data as Video[])
             .catch(this.handleError);
  }
            
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}