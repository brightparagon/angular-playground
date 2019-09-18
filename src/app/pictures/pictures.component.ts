import { Component, OnInit } from '@angular/core'
import { Picture } from '../picture'
import { PictureService } from '../picture.service'

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})

export class PicturesComponent implements OnInit {
  firstPicture: Picture = {
    id: 1,
    name: 'First Picture',
  }

  pictures: Picture[]

  selectedPicture: Picture

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.getPictures()
  }

  onSelect(picture: Picture): void {
    this.selectedPicture = picture
  }

  getPictures(): void {
    this.pictureService
      .getPictures()
      .subscribe((pictures) => this.pictures = pictures)
  }
}
