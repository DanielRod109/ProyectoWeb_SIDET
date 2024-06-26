import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Customer } from 'src/app/clases/customer/customer';
import { Login } from 'src/app/clases/login/login';

@Injectable({
  providedIn: 'root'
})
export class ApiCustomersService {

  private baseUrl = 'http://localhost:8090/mundo-literario';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private  customerlogged : boolean = false;
  private tokenkey: string = 'tokenCustomer';
  constructor(private http: HttpClient, private router:Router) { }

  login(loginData: Login): Observable<string> {
    return this.http.post(`${this.baseUrl}/customer/login`, loginData, { responseType: 'text' })
    .pipe(
      tap((tokenCustomer: string) => {
        localStorage.setItem(this.tokenkey, tokenCustomer);
        this.customerlogged = true; // Guarda el token en el localStorage
      })
    )
  }

  register(customerData: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer/register`, customerData);
  }

  updateCustomer(customerData: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}/customer/update/${customerData.customer_id}`, customerData, { headers: this.httpHeaders });
  }

  getCustomer(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/findId/${customerId}`);
  }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/list`);
  }

  confirmAccount(token: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/confirm/${token}`);
  }

  sendResetCode(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer/sendResetCode`, email, { headers: this.httpHeaders });
  }

  resetPassword(resetCode: string, newPassword: string, email: string): Observable<any> {
    const requestData = { resetCode, newPassword, email };
    return this.http.post(`${this.baseUrl}/customer/resetPassword`, requestData, { headers: this.httpHeaders });
  }
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenkey);
    return token !== null;
  }

  logout(): void {
    const tokenKey = localStorage.getItem('tokenCustomer');
    if (tokenKey) {
      this.logoutCustomer(tokenKey).subscribe(() => {
        localStorage.removeItem('tokenCustomer');
        this.customerlogged = false;
    setTimeout(() => {
      this.router.navigate(['/mundo-literario']);
      
    }, 800);
      });
    }
  }

  logoutCustomer(token: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout/${token}`, {});
  }

  //Métodos para Login y Deslogueo
  obtainLoginData(customerEmail: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/customer/nameId/${customerEmail}`);
  }

  obtainProfile(token: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/findCustomerByToken/${token}`, { headers: this.httpHeaders });
  }

}
