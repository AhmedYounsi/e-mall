import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: any[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getAllProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.getAllProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  })),
  on(ProductActions.getAllProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
