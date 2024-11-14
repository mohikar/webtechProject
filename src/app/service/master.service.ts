import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiURL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  constructor(private http: HttpClient) { }

  onLogin(obj:any) {
    debugger;
    return this.http.post(this.apiURL + 'login', obj )
  }
  onRegister(obj:any) {
    debugger;
    return this.http.post(`${this.apiURL}AddNewUser`, obj)
  }

  getParentDept() {
    return this.http.get(`${this.apiURL}GetParentDepartment`)
  }
}
