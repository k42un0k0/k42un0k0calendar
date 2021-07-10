import { Component,OnInit } from '@angular/core';
import {lib} from "@k42un0k0calendar/lib"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
    lib()
  }
  title = 'todo';

}
