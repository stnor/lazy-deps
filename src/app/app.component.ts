import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lazy-deps';

  constructor() {

  }

  ngOnInit() {

    (async () => {
      const jQueryAwait = await import("jquery");
      console.log("await import type=", typeof jQueryAwait)
      console.log("await import jQueryAwait=", jQueryAwait)

      //@ts-ignore
      console.log("await import jQueryAwait.module=", jQueryAwait.module)

      //@ts-ignore
      const jQuery = require("jquery");
      console.log("using require", typeof jQuery, jQuery);

    })();



  }


}
