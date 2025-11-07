import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { validationMessage } from 'src/types/general.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.css']
})
export class EmailPage {
  public formContact: FormGroup;
  public sending = false
  public validations = [
    {
      input: 'name',
      validations: [{
        key: 'required',
        message: 'VALIDATIONS.NOMBRE_REQUERIDO'
      }]
    },
    {
      input: 'email',
      validations: [
        {
          key: 'required',
          message: 'VALIDATIONS.EMAIL_REQUERIDO'
        },
        {
          key: 'pattern',
          message: 'VALIDATIONS.EMAIL_INVALIDO'
        },
      ]
    },
    {
      input: 'message',
      validations: [
        {
          key: 'required',
          message: 'VALIDATIONS.MENSAJE_REQUERIDO'
        },
        {
          key: 'minlength',
          message: 'VALIDATIONS.MENSAJE_LONGITUD_MINIMA'
        },
        {
          key: 'maxlength',
          message: 'VALIDATIONS.MENSAJE_LONGITUD_MAXIMA'
        }
      ]
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(500)]],
    });
  }

  inputValidate(key: string): validationMessage[] {
    const listValidationes = this.validations.find(i => i.input === key)
    if (listValidationes) {
      return listValidationes.validations
    }
    return []
  }

  get form() {
    return this.formContact.controls;
  }

  sendMessage() {
    this.sending = true
    if (this.formContact.invalid) {
      this.form['name'].markAsDirty()
      this.form['email'].markAsDirty()
      this.form['message'].markAsDirty()
      this.sending = false
      return
    }

    emailjs.send(environment.SERVICE_MAIL_ID, environment.TEMPLATE_MAIL_ID, this.formContact.value, environment.PUBLIC_KEY_MAIL_ID)
      .then(() => {
        this.sending = false
        this.router.navigate(['success'])
      }, (err) => { console.log('error ==>', err)
        this.sending = false
      });
  }
}
