import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { UserService } from './user.service';


@Component({
    selector: 'UserComponent',
    templateUrl: './user.component.html'
})
export class UserComponent {
    public users: User[];
    public user: User;
    myAppUrl: string = "";


    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/SampleData/GetUsers').subscribe(result => {
    //        this.users = result.json() as User[];
    //    }, error => console.error(error));
    //}
    //constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    this.myAppUrl = baseUrl;
    //    this.getUsers();
    //}

    constructor(public http: Http, private _router: Router, private _userService: UserService) {
        this.getUsers();
    }  


    getUsers() {
        this._userService.getUsers().subscribe(data => this.users = data)
    }


    delete(userId) {
        var ans = confirm("Do you want to delete user with Id: " + userId);
        if (ans) {
            this._userService.deleteUser(userId).subscribe((data) => {
                this.getUsers();
            }, error => console.error(error))
        }
    }  


}

interface User {
    userId: number;
    firstName: string;
    middleName: string;
    lastName: string;
}

