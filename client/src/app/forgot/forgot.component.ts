import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  template: `
      <section class="hero is-fullheight is-bold">
          <div class="hero-body">
              <div class="container">
                  <!-- form goes here -->
                  <form (ngSubmit)="processForgotForm()">
                      <label class="label">Reset your password</label>
                      <!-- username -->
                      <div class="field">
                          <input type="text" name="username" class="input" placeholder="username" [(ngModel)]="username"
                                 required
                                 minlength="3"
                                 #usernameInput="ngModel">
                          <div class="help is-error" *ngIf="usernameInput.invalid && usernameInput.dirty">
                              username is required to reset your password
                          </div>
                      </div>
                      <button type="submit" class="button is-danger is-medium">send reset email</button>
                  </form>
              </div>
          </div>
      </section>
      `,
      styles: []
      })
export class ForgotComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit() {
  }
  /**
   * Process the forgot password form we have. Send to whatever backend
   * Only alerting for now
   */
  processForgotForm() {
    const allInfo = `My username is ${this.username}.`;
    alert(allInfo);
  }
}
