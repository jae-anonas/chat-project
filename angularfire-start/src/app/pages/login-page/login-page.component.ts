import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  chatService = inject(ChatService);
  user$ = this.chatService.user$;

  email: string = "";
  password: string = "";

  constructor(private formBuilder: FormBuilder) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: [this.email, Validators.required, Validators.email],
    password: [this.password, Validators.required] 
  });

  onSubmit(loginForm: FormGroup) {
    if(loginForm.valid) {
      console.log('Logging in!', loginForm.value);
    } else {
      console.log(loginForm.errors);
    }
  }
}
