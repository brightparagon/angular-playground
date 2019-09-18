import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PicturesComponent } from './pictures/pictures.component'
import { PictureComponent } from './picture/picture.component'

const routes: Routes = [
  { path: '', redirectTo: '/pictures', pathMatch: 'full' },
  { path: 'pictures', component: PicturesComponent },
  { path: 'picture/:id', component: PictureComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
