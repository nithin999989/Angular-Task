import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entrypage',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './entrypage.component.html',
  styleUrl: './entrypage.component.css'
})
export class EntrypageComponent {

}
