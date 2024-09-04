import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyStandaloneComponentComponent } from './my-standalone-component/my-standalone-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyStandaloneComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
