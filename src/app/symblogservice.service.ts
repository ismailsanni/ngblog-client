import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SymblogserviceService {
  api_url = "http://localhost/symblog/web/app_dev.php/api";

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http
      .get<any[]>(this.api_url + "/articles")
      .pipe(map(data => data));
  }
}
