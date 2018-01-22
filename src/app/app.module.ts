import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { routing } from './app.routing';
import { PostComponent } from './post/post.component';
import { SurvivalComponent } from './survival/survival.component';
import { FoodComponent } from './food/food.component';
import { GamesComponent } from './games/games.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FashionComponent,
    PostComponent,
    SurvivalComponent,
    FoodComponent,
    GamesComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
