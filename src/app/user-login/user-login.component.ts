import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUser")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.name === this.loginForm.value.name && a.password === this.loginForm.value.password
      });

 

      if(user){

 

        alert("Login successfull");

 

        this.loginForm.reset();

 

        if(user.role=='admin'){

 

          this.router.navigate(['product'])

 

        }

 

        else{

 

          this.router.navigate(['Home'])

 

        }

 

        //this.router.navigate(['list'])

 

      }else{

 

        //alert("User not found");

 

      }

 

    },err=>{

 

      alert("Something went wrong");

 

    })

 

  }

 

}