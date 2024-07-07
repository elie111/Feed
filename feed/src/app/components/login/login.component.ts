import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.sass'
})
export class LoginComponent {
    public userId: string = '';

    constructor(private router: Router) { }

    onLogin() {
        if (this.userId !== '') {
            localStorage.setItem("userId", this.userId);
            this.router.navigate(['/home']);
        }
    }

}
