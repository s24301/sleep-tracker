import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SliderComponent } from "./components/slider.component/slider.component";
import { NavComponent } from "./components/navigation.component/navigation.component";
import { RadioComponent } from "./components/radio.component/radio.component";
import { DateComponent } from './components/date.component/date.component';
import { NotesComponent } from './components/notes.component/notes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderComponent, NavComponent, RadioComponent, DateComponent, NotesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sleep-tracker');
  sleepHours = signal(0);
}
