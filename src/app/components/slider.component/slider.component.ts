import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  sleepHours: number = 8;

  @Output() sleepHoursChange = new EventEmitter<number>();

  onSliderChange() {
    this.sleepHoursChange.emit(this.sleepHours);
    // console.log('📤 Emituję wartość:', this.sleepHours);
  }

}
