import { NgModule } from '@angular/core';
import { YoutubePlayerComponent } from './youtube-player.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
  ],
  declarations: [YoutubePlayerComponent, ViewComponent],
  exports: [YoutubePlayerComponent,ViewComponent]
})
export class YoutubePlayerModule { }
