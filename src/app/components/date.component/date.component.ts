import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
}
