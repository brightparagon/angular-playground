import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'

import { Picture } from './picture'
import { pictures } from './mock-pictures'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})

export class PictureService {
  constructor(private messageService: MessageService) { }

  getPictures(): Observable<Picture[]> {
    this.messageService.add('PictureService: fetched heroes')
    return of(pictures)
  }

  getPicture(id: number): Observable<Picture> {
    this.messageService.add(`PictureService: fetched picture id=${id}`)
    return of(pictures.find((picture) => picture.id === id))
  }
}
