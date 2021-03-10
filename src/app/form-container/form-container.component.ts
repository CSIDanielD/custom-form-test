import {
  AfterContentInit,
  Component,
  ContentChildren,
  Output,
  QueryList
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { FormInputFieldComponent } from "../form-input-field/form-input-field.component";

@Component({
  selector: "app-form-container",
  templateUrl: "./form-container.component.html",
  styleUrls: ["./form-container.component.css"]
})
export class FormContainerComponent implements AfterContentInit {
  @ContentChildren(FormInputFieldComponent)
  public formFields: QueryList<FormInputFieldComponent>;

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
        value: field.placeholder,
        disabled: field.disabled
      });
    });

    this.formGroup$.next(new FormGroup(controls));
  }
}
