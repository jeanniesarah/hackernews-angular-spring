import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <section class="hero is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <!-- form goes here -->
          <form (ngSubmit)="submissionForm()">
            <label class="label">Submit an article to be featured</label>
            <!-- link -->
            <div class="field">
              <input type="text" name="url" class="input" placeholder="URL"  [(ngModel)]="url"
                     required
                     minlength="11"
                     #urlInput="ngModel">
              <div class="help is-error" *ngIf="urlInput.invalid && urlInput.dirty">
                url is required and needs to be at least 11 characters long
              </div>
            </div>
            <!-- TODO: Add recaptcha -->
            <button type="submit" class="button is-danger is-medium">submit</button>
          </form>
        </div>
      </div>
    </section>
    `,
  styles: []
})
export class SubmitComponent implements OnInit {
  url: string;

  constructor() { }

  ngOnInit() {
  }
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  submissionForm() {
    const allInfo = `Article to submit: ${this.url}`;
    alert(allInfo);
  }
}

