import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-new-complaint',
  standalone: true,
  imports: [],
  templateUrl: './new-complaint.component.html',
  styleUrl: './new-complaint.component.css'
})
export class NewComplaintComponent implements OnInit{

  masterService = inject(MasterService);
  ParentDeptList: any[] = [];
  ngOnInit(): void {
      this.loadParentDept();
  }

  loadParentDept(){
    this.masterService.getParentDept().subscribe((res:any)=>{
      this.ParentDeptList = res.data;
    }, error=>{
       
    })
  }

}
