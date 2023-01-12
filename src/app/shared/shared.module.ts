import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MainComponent } from "./components/main/main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [LoaderComponent, SideNavComponent, MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  exports: [LoaderComponent, SideNavComponent, MainComponent],
})
export class SharedModule {}
