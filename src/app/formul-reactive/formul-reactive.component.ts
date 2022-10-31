import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formul-reactive',
  templateUrl: './formul-reactive.component.html',
  styleUrls: ['./formul-reactive.component.css']
})
export class FormulReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.onInit();
  }

  onSubmit():void{
    console.log("form->", this.contactForm.value);
  }

  onInit():FormGroup{
    return this.fb.group({
      name:["",[Validators.required, Validators.minLength(2)]],
      checkInt:["",[Validators.required]],
      department:["",],
      comment:["",[Validators.required,Validators.maxLength(80)]]

    })

  }


}
