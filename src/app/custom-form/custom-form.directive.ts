import {
  AfterContentInit,
  ContentChildren,
  Directive,
  Output,
  QueryList
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { CustomFormFieldComponent } from "../custom-form-field/custom-form-field.component";

@Directive({ selector: "app-custom-form" })
export class CustomFormDirective implements AfterContentInit {
  @ContentChildren(CustomFormFieldComponent)
  formFields!: QueryList<CustomFormFieldComponent>;

  @Output()
  public formGroup$ = new BehaviorSubject<FormGroup>(new FormGroup({}));

  constructor() {}

  ngAfterContentInit() {
    this.buildForm();
  }

  buildForm() {
    // Build the FormGroup from composed children.
    let controls: { [fieldName: string]: FormControl } = {};

    this.formFields.forEach(field => {
      controls[field.fieldName] = new FormControl({
        value: field.placeHolder,
        disabled: field.disabled
      });
    });

    this.formGroup$.next(new FormGroup(controls));
  }
}
