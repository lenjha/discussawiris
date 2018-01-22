import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodComponent } from './food/food.component';
import { GamesComponent } from './games/games.component';
import { SurvivalComponent } from './survival/survival.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fashion',
    component: FashionComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'survival',
    component: SurvivalComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
