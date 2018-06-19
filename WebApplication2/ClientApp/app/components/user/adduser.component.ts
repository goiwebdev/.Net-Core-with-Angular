import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';




@Component({
    selector: 'createuser',
    templateUrl: './adduser.component.html'
})
export class createuser implements OnInit {
    userForm: FormGroup;
    title: string = "Create";
    userId: number = 0;
    errorMessage: any;


    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,  private _userService: UserService,
        private _router: Router) {
        console.log(this._avRoute.snapshot);
        console.log(this._avRoute.snapshot.params["userId"] + ' ito id');
        if (this._avRoute.snapshot.params["id"]) {
            this.userId = this._avRoute.snapshot.params["id"];
        }
        this.userForm = this._fb.group({
            userId: 0,
            firstName: ['', [Validators.required]],
            middleName: ['', [Validators.required]],
            lastName: ['', [Validators.required]]            
        })

    }
    ngOnInit() {
        console.log(this.userId > 0);
        if (this.userId > 0) {
            this.title = "Edit";
            console.log(this.userId + 'xxxxxx');
            this._userService.getUserId(this.userId)
                .subscribe(resp => this.userForm.setValue(resp)
                , error => this.errorMessage = error);  
           
        }
    }



    save() {
        if (!this.userForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._userService.saveUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/user-data']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._userService.updateUser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/user-data']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/user-data']);
    }
    get firstName() { return this.userForm.get('firstName'); }
    get middleName() { return this.userForm.get('middleName'); }
    get lastName() { return this.userForm.get('lastName'); }
}