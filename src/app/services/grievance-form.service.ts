import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GrievanceFormService {
  constructor(
    public http: HttpClient,
    @Inject("BASE_API_URL") public apiUrl: string
  ) {}

  saveGrievenceForm(data:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createGrievanceComplaint`, data);
  }
}
