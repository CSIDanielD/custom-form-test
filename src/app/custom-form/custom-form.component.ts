import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  Output,
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

  @Output()
  public formValueChanges = this.formGroup?.valueChanges;

  @Output()
  public formStatusChanges = this.formGroup?.statusChanges;

  constructor() {}

  ngOnInit() {}

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

    this.formGroup = new FormGroup(controls);
    this.formValueChanges = this.formGroup?.valueChanges;
    this.formStatusChanges = this.formGroup?.statusChanges;
  }
}
