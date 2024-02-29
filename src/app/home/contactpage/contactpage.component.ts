import { Component } from '@angular/core';
import { HeaderpageComponent } from '../headerpage/headerpage.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [HeaderpageComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {

}