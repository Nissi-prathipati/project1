import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public signupForm!:FormGroup;

 

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){ }

 

  ngOnInit():void{

 

    this.signupForm=this.formBuilder.group({

 

      name:['',[Validators.required]],

 

      mobile:[''],

 

      email:['',[Validators.required]],

 

      password:[''],

 

    })

 

  }

 

  signup(){

 

    this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)

 

    .subscribe(res=>{

 

      alert("Signup successfull");

 

      this.signupForm.reset();
      this.router.navigate(['Login']);

 

    },err=>{

 

      alert("Something went wrong")

 

    })

 

  }
}
