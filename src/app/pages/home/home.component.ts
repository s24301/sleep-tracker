import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from "../../components/slider.component/slider.component";
import { RadioComponent } from "../../components/radio.component/radio.component";
import { DateComponent } from '../../components/date.component/date.component';
import { NotesComponent } from '../../components/notes.component/notes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DateComponent, SliderComponent, RadioComponent, NotesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home {
  sleepHours: number = 0;
  submitted: boolean = false;

  submitSleepData() {
    this.submitted = true;
    // console.log(`✅ Dane zapisane: ${this.sleepHours} godzin snu`);
  }
}
