import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './utils/material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-web-app';
}
