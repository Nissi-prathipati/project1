import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  jsonData:any[]=[];

  message:string='';
  constructor(private serviceobj:AppServiceService,private router:Router){

  }
  ngOnInit(): void {

    this.serviceobj.getcartdata().subscribe(data => {

      this.jsonData = data;

      if(this.jsonData.length == 0){

        this.message = "No items";

      }

    });

  }

  remove(id:any):void{

    this.serviceobj.removecart(id).subscribe(res=>{

      this.ngOnInit();

      alert('Item Deleted Sucessfully');
      

    },err=>{

      alert('unable to delete the record');

    })

  } 

  payment(id:any):void{

    this.serviceobj.movepay(id).subscribe(res=>{

      this.ngOnInit();

      alert('please pay the amount inorder to get a product');
      this.router.navigate(['Login']);

    },err=>{

      alert('unable to pay');

    })

  } 
}
