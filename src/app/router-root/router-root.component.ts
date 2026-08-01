import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink],
  templateUrl: './router-root.component.html'
})
export class RouterRootComponent {

}
