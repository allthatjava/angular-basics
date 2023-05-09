import { Component } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component {

  title='Directive Example';

  videos = [
    {title:'My video 1', share: 415, likes:257, dislike:12, thumbnail:'/assets/test.jpg'},
    {title:'My video 2', share: 215, likes:325, dislike:12, thumbnail:'/assets/test.jpg'},
    {title:'My video 3', share: 513, likes:105, dislike:12, thumbnail:'/assets/test.jpg'}
  ]

  mostLikedVideo = this.getMostLikeVideo();

  getMostLikeVideo(){
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr,next)=> next.likes - curr.likes)[0];
  }
}
