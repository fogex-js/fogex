import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FogexExampleComponent } from './fogex-example/fogex-example.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FogexExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular'
}
