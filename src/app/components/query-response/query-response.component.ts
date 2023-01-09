import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-response',
  templateUrl: './query-response.component.html',
  styleUrls: ['./query-response.component.scss']
})
export class QueryResponseComponent implements OnInit {
public grivanceForm:FormGroup;
  constructor(public fb:FormBuilder) { }

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
      category:new FormControl(null,[Validators.required]),
      details:new FormControl(null,[Validators.required]),
      queryLetter:new FormControl(null,[Validators.required]),
      docs: this.fb.array([{ file: [""] }]),
      responseLetter:new FormControl(null,[Validators.required])
    });
  }

  get docs() {
    return this.grivanceForm.controls["docs"] as FormArray;
  }

  public addDoc(): void {
    const docForm = this.fb.group({
      file: ["",Validators.required],
    });
    this.docs.push(docForm);
  }

  public upload(event: any, index?: number): void {
    let fileName = event.target.files[0].name;
    this.docs.controls[index].patchValue({ file: fileName });
  }

}
