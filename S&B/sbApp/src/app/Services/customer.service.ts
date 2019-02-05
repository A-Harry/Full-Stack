import {Injectable} from '@angular/core';
import {Customer} from '../Shared/customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs/Observable'
@Injectable({
    providedIn:'root'
})
export class CustomerService{

    selectedCustomer: Customer = {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        credit:''

    }    
    constructor(private http:HttpClient){

    }

    postUser(customer:Customer){
        return this.http.post(environment.apiBaseUrl+'/register',customer);
    }

    customerURL = environment.apiBaseUrl+'/customers'
    getCustomers():Observable<Customer[]>{
        return this.http.get<Customer[]>(this.customerURL)
    }
}