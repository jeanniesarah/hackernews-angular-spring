import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
      <section class="hero is-fullheight is-bold">
          <div class="hero-body">
              <div class="container">
                  <!-- form goes here -->
                  <form (ngSubmit)="processForm()">
                      <label class="label">Login</label>
                      <!-- username -->
                      <div class="field">
                          <input type="text" name="username" class="input" placeholder="username" [(ngModel)]="username"
                                 required
                                 minlength="3"
                                 #usernameInput="ngModel">
                          <div class="help is-error" *ngIf="usernameInput.invalid && usernameInput.dirty">
                              username is required 
                          </div>
                      </div>

                      <!-- password -->
                      <div class="field">
                          <input type="text" name="password" class="input" placeholder="password" [(ngModel)]="password"
                                 required
                                 #passwordInput="ngModel">
                          <div class="help is-error" *ngIf="passwordInput.invalid && passwordInput.dirty">
                              password is required
                          </div>
                      </div>

                      <button type="submit" class="button is-danger is-medium">login</button>
                      <a class="navbar-item forgot-password" routerLink="forgot">forgot your password?</a>
                                         
                  </form>
              <br>
             <br>
                  <!-- form goes here -->
                  <form (ngSubmit)="processForm()">
                      <label class="label">Create account</label>
                      <!-- username -->
                      <div class="field">
                          <input type="text" name="username" class="input" placeholder="username"  [(ngModel)]="username"
                                 required
                                 minlength="3"
                                 #usernameInput="ngModel">
                          <div class="help is-error" *ngIf="usernameInput.invalid && usernameInput.dirty">
                              username is required and needs to be at least 3 characters long
                          </div>
                      </div>
                      <!-- email -->
                      <div class="field">
                          <input type="email" name="email" class="input" placeholder="email" [(ngModel)]="email"
                                 required
                                 email
                                 #emailInput="ngModel">
                          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
                              needs to be a valid email address
                          </div>
                      </div>
                      <!-- password -->
                      <div class="field">
                          <input type="text" name="password" class="input" placeholder="password" [(ngModel)]="password"
                                 required
                                 #passwordInput="ngModel">
                          <div class="help is-error" *ngIf="passwordInput.invalid && passwordInput.dirty">
                              password is required and needs to be at least 6 characters long
                          </div>
                      </div>

                      <button type="submit" class="button is-danger is-medium">create account</button>
                      
                  </form>
              </div>
      
          </div>
      </section>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.username}. My email is ${this.email}. My password is ${this.password}`;
    alert(allInfo);
  }
}
