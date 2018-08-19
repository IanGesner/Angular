import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './Shopping/shopping-list-detail/shopping-list-detail.component';
import { HeaderComponent } from './Header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
