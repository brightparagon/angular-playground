import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Picture } from '../picture'
import { PictureService } from '../picture.service'

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent implements OnInit {
  @Input() picture: Picture

  constructor(
    private route: ActivatedRoute,
    private pictureService: PictureService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPicture()
  }

  getPicture(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.pictureService
      .getPicture(id)
      .subscribe((picture) => this.picture = picture)
  }

  goBack(): void {
    this.location.back()
  }
}
