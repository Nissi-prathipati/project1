import { Component } from '@angular/core';

import { AppServiceService } from '../app-service.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


jsonData:any[]=[];

  selectedItems: Array<any> = [];
  constructor(private serviceobj:AppServiceService,private router:Router){

  }
ngOnInit(): void {

    this.serviceobj.getData().subscribe((data) => {

      this.jsonData = data;

    },err=>{

      alert('Something went wrong');

    });

  }
  addCart(data:any){

    console.log(data);

    this.serviceobj.itemCart(data).subscribe((res: any)=>{

      alert("Item added Successfully");
      this.router.navigate(['cart']);

      console.log(res);

    },err=>{

      alert("Something went wrong");

    })

  }
  
}
