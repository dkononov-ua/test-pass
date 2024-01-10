import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  hide = true;
  regPassword: any;

  constructor() { }

  ngOnInit(): void {  }

  lessEight(): boolean {
    const password = this.regPassword;
    if (!password) {
      return false;
    }
    return password.length < 8;
  }

  isWeakPassword(): boolean {
    const password = this.regPassword;
    if (!password) {
      return false;
    }
    const containsOnlyLetters = /^[A-Za-zА-Яа-я]+$/.test(password);
    const containsOnlyDigits = /^\d+$/.test(password);
    const containsOnlySymbols = /^[!@#$%^&*(),.?":{}|<>]+$/.test(password);
    return password.length >= 8 && (containsOnlyLetters || containsOnlyDigits || containsOnlySymbols);
  }

  isMediumPassword(): boolean {
    const password = this.regPassword;
    if (!password) {
      return false;
    }
    const hasLetters = password.match(/[A-Za-zА-Яа-я]/);
    const hasDigits = password.match(/\d/);
    const hasSymbols = password.match(/[!@#$%^&*(),.?":{}|<>]/);
    return (
      password.length >= 8 &&
      (
        (hasLetters && hasDigits && !hasSymbols) ||
        (hasLetters && !hasDigits && hasSymbols) ||
        (!hasLetters && hasDigits && hasSymbols)
      )
    );
  }

  isStrongPassword(): boolean {
    const password = this.regPassword;
    if (!password) {
      return false;
    }
    return (
      password.length >= 8 &&
      password.match(/[A-Za-zА-Яа-я]/) &&
      password.match(/\d/) &&
      password.match(/[!@#$%^&*(),.?":{}|<>]/)
    );
  }

}
