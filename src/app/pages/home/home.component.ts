import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreDisplayerComponent } from 'src/app/components/store-displayer/store-displayer.component';

import { getAllProducts } from 'src/app/ngrxStore/product/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoreDisplayerComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  productSubscription: any;
  constructor(private productStore: Store<any>) {}
  ngOnInit(): void {
    this.productStore.dispatch(getAllProducts());
    this.productStore.select('product').subscribe((data) => console.log(data));
  }
}
