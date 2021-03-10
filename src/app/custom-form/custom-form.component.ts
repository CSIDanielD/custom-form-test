import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CustomFormFieldComponent } from "../custom-form-field/custom-form-field.component";

@Component({
  selector: "app-custom-form",
  templateUrl: "./custom-form.component.html",
  styleUrls: ["./custom-form.component.css"]
})
export class CustomFormComponent implements OnInit, AfterContentInit {
  @ContentChildren(CustomFormFieldComponent)
  formFields!: QueryList<CustomFormFieldComponent>;

  public formGroup: FormGroup | null = null;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    // Build the FormGroup from composed children.
    let controls: { [fieldName: string]: FormControl } = {};

    this.formFields.forEach(field => {
      controls[field.fieldName] = new FormControl({
        value: field.placeHolder,
        disabled: field.disabled
      });
    });

    this.formGroup = new FormGroup(controls);
  }
}
