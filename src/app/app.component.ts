import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordGen';
  password: string = ""
  useLetter: boolean = false;
  useNumber: boolean = false;
  useSymbol: boolean = false;
  lengthvalue: number = 0;

  onButtonClick() {

    this.password = ''
    let validChars = ''
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const number = 1234567890;
    const symbol = "!@#$%^&*()_+";
    if (this.useLetter) {
      validChars += alpha;
    }

    if (this.useNumber) {
      validChars += number;
    }

    if (this.useSymbol) {
      validChars += symbol;
    }
    let generatedPassword = ''
    for (let i = 0; i < this.lengthvalue; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;



  }

  useLetters() {
    this.useLetter = !this.useLetter;
  }

  useNumbers() {
    this.useNumber = !this.useNumber;
  }

  useSymbols() {
    this.useSymbol = !this.useSymbol;
  }

  uselength(value: string) {
    this.lengthvalue = parseInt(value);


  }
}
