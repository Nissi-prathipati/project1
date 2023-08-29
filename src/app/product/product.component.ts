import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  jsonData:any[]=[];

  selectedProduct:any;

 

  constructor(private serviceobj:AppServiceService,private router:Router){

  }

  ngOnInit(): void {

    this.serviceobj.getData().subscribe((data) => {

      this.jsonData = data;

    });

  }





  delete_Item(id:number){

    this.serviceobj.deleteItem(id).subscribe(res=>{

      alert("Item Deleted Successfully");

      this.ngOnInit();

    },err=>{

      alert("Something went wrong");

    })

  }



  edit_Item(data:any){

    this.serviceobj.editItem(data).subscribe(res=>{

      alert("updated successfully");

    this.router.navigate(['update']);

    },err=>{

      alert("Something went wrong");

    })

  }



  get_Item(id:number){

    this.serviceobj.getItem(id).subscribe(

      (data:any)=>{

        this.selectedProduct = data;

      },

      err=>{

        alert('Not Found');

      }

    )
  }
}
