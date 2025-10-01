import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './components/slider.component/slider.component';
import { NavComponent } from './components/navigation.component/navigation.component';
import { RadioComponent } from './components/radio.component/radio.component';
import { DateComponent } from './components/date.component/date.component';
import { NotesComponent } from './components/notes.component/notes.component';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    SliderComponent,
    NavComponent,
    RadioComponent,
    DateComponent,
    NotesComponent
  ],
})
export class AppModule { }