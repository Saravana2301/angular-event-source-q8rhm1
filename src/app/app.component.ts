import { Component, ChangeDetectorRef } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { SseService } from './sse.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [];

  constructor(private sseService: SseService) {}

  onClick() {
    this.sseService
      .getServerSentEvent(
        'https://vlmazrasdev1ap1.fisdev.local:2023/igen/post-stream'
      )
      .subscribe(
        (ev) => {
          console.log(ev);
          this.data.push(ev.data);
          console.log(this.data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('==> complete');
        }
      );
  }
}
