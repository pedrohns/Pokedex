import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment as env } from '@enviroments/environment';
import { Observable, pipe, shareReplay } from 'rxjs';

// Interfaces
import { IResponseCreate, IResponseList } from 'app/interfaces/IResponsesAPI.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  #http = inject(HttpClient);
  #url = signal(env.urlCreate);
  #urlList = signal(env.urlList)

  httpGetCreate$(): Observable<IResponseCreate> {
    return this.#http.get<IResponseCreate>(this.#url()).pipe(shareReplay());
  }

  httpGetPokemons$(): Observable<IResponseList> {
    return this.#http.get<IResponseList>(this.#urlList()).pipe(shareReplay());
  }
  
}
