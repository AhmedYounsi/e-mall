import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import * as ProductActions from './product.actions';
import { ProductService } from './service/product.service';

@Injectable()
export class ProductEffects {
  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getAllProducts),
      switchMap(() =>
        this.productService.getAllProducts().pipe(
          delay(2000),
          map((products) => ProductActions.getAllProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.getAllProductsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
