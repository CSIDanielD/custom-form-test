import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngAfterContentInit() {
    // Build the FormGroup from composed children.
    let controls: FormControl[] = [];

    this.formFields.forEach(field => {
      controls.push(
        new FormControl({
          value: field.placeHolder,
          disabled: field.disabled
        })
      );
    });
  }
}
