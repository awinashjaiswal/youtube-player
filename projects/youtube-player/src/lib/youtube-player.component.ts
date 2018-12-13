import { Component, OnInit ,Input,OnChanges,SimpleChange,SimpleChanges } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser"
@Component({
  selector: 'ng6-youtube-player',
  templateUrl:"./youtube-player.component.html",
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit,OnChanges {
@Input() width:any;
@Input() height:any;
@Input() url:string;
secureUrl:any;
  constructor(private senitizer:DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
     this.secureUrl=this.senitizer.bypassSecurityTrustResourceUrl(changes.url.currentValue);
  }
}
