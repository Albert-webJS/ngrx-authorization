import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingUpComponent, SingInComponent } from './authorization';
import { TitlePosterComponent } from './title-poster/title-poster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, SingInComponent, SingUpComponent, TitlePosterComponent]
})

export class AppComponent {

}
