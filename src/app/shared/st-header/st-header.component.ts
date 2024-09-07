import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-st-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './st-header.component.html',
  styleUrl: './st-header.component.css'
})
export class StHeaderComponent {

}
