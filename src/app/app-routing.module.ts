import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GrievanceFormComponent } from "./components/grievance-form/grievance-form.component";
import { GrievanceSubmitComponent } from "./components/grievance-submit/grievance-submit.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { QueryResponseComponent } from "./components/query-response/query-response.component";
import { ViewGrievanceComponent } from "./components/view-grievance/view-grievance.component";
import { MainComponent } from "./shared/components/main/main.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "grievance-form",
    component: GrievanceFormComponent,
  },
  { path: "grievance-submit", component: GrievanceSubmitComponent },
  { path: "grievance-query", component: QueryResponseComponent },
  { path: "main", component: MainComponent,  children: [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "grievance-form",
    },
    
    {
      path: "grievance-form",
      component: GrievanceFormComponent,
      data:{isShow:true},
    },
    { path: "view-grievance", component: ViewGrievanceComponent },
     
  ] },
  { path: "login", component: LoginComponent },
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
