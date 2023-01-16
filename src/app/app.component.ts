import { Component,} from '@angular/core';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fran Hasenauer';
 
  faMapLocation = faMapLocation;
  
}
