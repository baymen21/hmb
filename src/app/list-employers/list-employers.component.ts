import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/employer.service';
import { Employer } from '../Models';


@Component({
  selector: 'app-list-employers',
  standalone: false,
  templateUrl: './list-employers.component.html',
  styleUrl: './list-employers.component.css'
})
export class ListEmployersComponent implements OnInit{
  employers:Employer[]=[];
  constructor (private service:EmployerService){
   // console.log("c'est le constructeur")
  }

ngOnInit(): void {
  this.service.getEmployers().subscribe(
    (data)=>
    {
      this.employers=data;
      //console.log(this.employers)
    }
  );
}

}
