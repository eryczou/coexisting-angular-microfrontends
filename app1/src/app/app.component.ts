import { Component } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  // @ts-ignore
  assetsBase = __webpack_public_path__;
}
