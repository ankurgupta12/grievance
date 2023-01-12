import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { GrievanceFormService } from "src/app/services/grievance-form.service";
import { finalize, take, takeUntil, tap } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-grievance-form",
  templateUrl: "./grievance-form.component.html",
  styleUrls: ["./grievance-form.component.scss"],
})
export class GrievanceFormComponent implements OnInit {
  public grivanceForm: FormGroup;
  public isSubmit: boolean;
  public showLoader: boolean;
  public componentDestroyed$ = new Subject();
  public verficationForm = new FormControl("", [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6),
  ]);
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public grievanceFormService: GrievanceFormService
  ) {}

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
    if (this.grivanceForm.valid) {
      console.log(this.grivanceForm.value);
      this.isSubmit = true;
      const data = {
        complainant_name: this.grivanceForm.value.cName,
        complainant_iec_no: this.grivanceForm.value.iecNumber,
        complainant_company_name: this.grivanceForm.value.companyName,
        complainant_email: this.grivanceForm.value.email,
        complainant_mobile: this.grivanceForm.value.mobileNumber,
        created_by: "Trade",
      };
      this.showLoader = true;
      this.grievanceFormService
        .saveGrievenceForm(data)
        .pipe(
          takeUntil(this.componentDestroyed$),
          finalize(() => {
            this.showLoader = false;
          })
        )
        .subscribe(() => {});
      console.log(this.grivanceForm.value);
    }
  }

  public redirectToSubmitGrievance(): void {
    this.verficationForm.valid &&
      this.router.navigateByUrl("/grievance-submit");
  }
  ngOnDestroy() {
    this.componentDestroyed$.complete();
    this.componentDestroyed$.unsubscribe();
  }
}
