import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.sass'
})
export class LoginComponent {
    public userID: string = '';

    constructor(private router: Router) { }

    onLogin() {
        if (this.userID !== '') {
            this.router.navigate(['/home']);
        }
    }

}
