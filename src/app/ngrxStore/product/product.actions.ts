import { createAction, props } from '@ngrx/store';

export const getAllProducts = createAction('[Product] Get All Products');
export const getAllProductsSuccess = createAction(
  '[Product] Get All Products Success',
  props<{ products: any[] }>()
);
export const getAllProductsFailure = createAction(
  '[Product] Get All Products Failure',
  props<{ error: any }>()
);
