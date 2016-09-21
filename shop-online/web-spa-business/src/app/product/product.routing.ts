import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductGroupCmp } from './group/group';
import { ProductGroupDetailCmp } from './group/detail/detail';

import { ProductCmp } from './product';
import { ProductDetailCmp} from './detail/detail';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'product-group', component: ProductGroupCmp },
  { path: 'product-group-detail/:id', component: ProductGroupDetailCmp},
  { path: 'product', component: ProductCmp },
  {path: 'product-detail/:code', component: ProductDetailCmp }
]);
