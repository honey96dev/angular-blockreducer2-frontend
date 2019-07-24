import {Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl} from '@angular/forms';

@Directive({
  selector: '[checkForce]',
  // We add our directive to the list of existing validators
  providers: [
    {provide: NG_VALIDATORS, useExisting: CheckForceValidator, multi: true}
  ]
})
export class CheckForceValidator implements Validator {
// This method is the one required by the Validator interface
  validate(control: FormControl): ValidationErrors | null {
    // Here we call our static validator function
    return CheckForceValidator.validateCheck(control);
  }

  static validateCheck(control: FormControl): ValidationErrors {
    if (control.value !== true) {
      return {checkForce: 'This field is required'};
    }
    return null;
  }
}
