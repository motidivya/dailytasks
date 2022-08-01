import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appUsernameValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UsernameValidatorDirective,
    multi: true
  }]
})
export class UsernameValidatorDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(control.value && control.value[0] !== '@'){
      return { 'usernameInvalid': true }
    }
    return null;
  }
}
