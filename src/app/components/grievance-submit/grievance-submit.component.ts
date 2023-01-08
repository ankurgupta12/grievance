import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grievance-submit',
  templateUrl: './grievance-submit.component.html',
  styleUrls: ['./grievance-submit.component.scss']
})
export class GrievanceSubmitComponent implements OnInit {
  public grivanceSubmitForm: FormGroup;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.grivanceSubmitForm = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      detail: new FormControl("",[Validators.required]),
      docs: this.fb.array([{ file: [''],}]),
     
    });
  }
  public submitForm(): void {
   
    if (this.grivanceSubmitForm.valid) {
      // this.isSubmit = true;
      console.log(this.grivanceSubmitForm.value);
    }
   
  }
  get docs() {
    return this.grivanceSubmitForm.controls['docs'] as FormArray;
  }

  public addDoc():void {
    const docForm = this.fb.group({
      file: [''],
    });
    this.docs.push(docForm);
  }

  public upload(event: any, index: number): void {
    let fileName = event.target.files[0].name;
    this.docs.controls[index].patchValue({ file: fileName });
  }
}
