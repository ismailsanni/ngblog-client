import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { SymblogserviceService } from "./symblogservice.service";

import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";

const appRoutes: Routes = [
  {
    path: "articles",
    component: ArticleComponent
  },

  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];
@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [SymblogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
