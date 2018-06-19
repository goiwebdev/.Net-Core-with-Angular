﻿
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getUsers() {
        console.log('goi2');
        console.log(this.myAppUrl + "api/User/Index");
        return this._http.get(this.myAppUrl + 'api/User/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);

    }
    getUserId(id: number) {
        console.log(this.myAppUrl + "api/User/Details/" + id);
        return this._http.get(this.myAppUrl + "api/User/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    saveUser(user) {
        return this._http.post(this.myAppUrl + 'api/User/Create', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateUser(user) {
        return this._http.put(this.myAppUrl + 'api/User/Edit', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteUser(id) {
        return this._http.delete(this.myAppUrl + "api/User/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}

