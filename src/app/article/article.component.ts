import { Component, OnInit } from "@angular/core";
import { SymblogserviceService } from "../symblogservice.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  myArticles: any;

  constructor(private api: SymblogserviceService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.api.getArticles().subscribe(myArticles => {
      this.myArticles = myArticles;
      console.log(this.myArticles);
    });
  }
}
