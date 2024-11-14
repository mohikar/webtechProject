import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  masterService = inject(MasterService);
  router = inject(Router);


  registerObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }

  loginObj: any = {
    "userName": "",
    "password": ""
  }

  isLoginFormVisible: boolean = true;
  showRegister() {
      this.isLoginFormVisible = false;
  }
  showLogin() {
      this.isLoginFormVisible = true;
  }

  onRegister(){
    debugger;
    this.masterService.onRegister(this.registerObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert('Registration Successful')
        } else{
          alert(res.message)
        }
    })
  }
  login(){
    debugger;
    this.masterService.onRegister(this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        localStorage.setItem('complaintUser', JSON.stringify(res.data))
        this.router.navigateByUrl('/dashboard');
        
        } else{
          alert(res.message)
        }
    })
  }
}
