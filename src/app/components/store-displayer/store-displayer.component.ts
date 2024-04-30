import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'store-displayer',
  templateUrl: './store-displayer.component.html',
  styleUrls: ['./store-displayer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
})
export class StoreDisplayerComponent {
  constructor(private router: Router) {
    // ...
  }
  navigateToStore(id: string) {
    this.router.navigate(['/store', id]);
  }
}
