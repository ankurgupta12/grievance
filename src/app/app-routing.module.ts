import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GrievanceFormComponent } from "./components/grievance-form/grievance-form.component";
import { GrievanceSubmitComponent } from "./components/grievance-submit/grievance-submit.component";
import { HomeComponent } from "./components/home/home.component";
import { QueryResponseComponent } from "./components/query-response/query-response.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "grievance-form",
    component: GrievanceFormComponent,
  },
  { path: "grievance-submit", component: GrievanceSubmitComponent },
  {path:"grievance-query",component:QueryResponseComponent},
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
