import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-grievance-form",
  templateUrl: "./grievance-form.component.html",
  styleUrls: ["./grievance-form.component.scss"],
})
export class GrievanceFormComponent implements OnInit {
  public grivanceForm: FormGroup;
  public isSubmit: boolean;
  public verficationForm = new FormControl("", [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6),
  ]);
  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.grivanceForm = new FormGroup({
      cName: new FormControl(null, [Validators.required]),
      iecNumber: new FormControl(null),
      companyName: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
    });
  }
  
  public submitForm(): void {
    this.isSubmit = true;
    if (this.grivanceForm.valid) {
      this.isSubmit = true;
      console.log(this.grivanceForm.value);
    }
  }

  public redirectToSubmitGrievance(): void {
    this.verficationForm.valid && 
    this.router.navigateByUrl('/grievance-submit')
  }
}
