import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SONGS } from './mocks/songs.mocks';
import { ISong } from './models/song.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getSongs(): Observable<ISong[]> {
    return of(SONGS); // Nos devuelve el listado de canciones
  }
}
