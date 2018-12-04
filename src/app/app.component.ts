import { Component } from '@angular/core';
import {FormBuilder,FormsModule,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  header : string;
  onfileChanged(event){
    const file = event.target.name[0];
  }
}
