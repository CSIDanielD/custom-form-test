import {
  Component,
  Input,
  Self,
  Optional,
  TemplateRef,
  Output,
  ViewChild,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-form-input-field",
  templateUrl: "./form-input-field.component.html",
  styleUrls: ["./form-input-field.component.css"]
})
export class FormInputFieldComponent
  implements OnInit, OnChanges, ControlValueAccessor {
  @Input() public fieldName: string = "";
  @Input() public disabled: boolean = false;
  @Input() public label: string = "";
  @Input() public placeholder: string = "";
  @Input() public type: "text" | "email" | "password" = "text";
  @Input() public ngControl?: NgControl;

  @Output()
  @ViewChild("fieldTemplate", { read: TemplateRef })
  public fieldTemplate: TemplateRef<any>;

  public value: any = "";

  public onChange(value: any) {}
  public onTouched() {}

  // constructor(
  //   // Retrieve the dependency only from the local injector,
  //   // not from parent or ancestors.
  //   @Self()
  //   // We want to be able to use the component without a form,
  //   // so we mark the dependency as optional.
  //   @Optional()
  //   private ngControl: NgControl
  // ) {
  //   if (this.ngControl) {
  //     console.log("NgControl.");
  //     this.ngControl.valueAccessor = this;
  //   }
  // }

  ngOnInit() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("Changes:", changes);
    // if (changes.ngControl) {
    //   console.log("ngControl changed!");
    //   this.ngControl.valueAccessor = this;
    // }
  }

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(changeHandler: (value: any) => any): void {
    // Store the provided function as an internal method.
    this.onChange = changeHandler;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  getHTMLEventValue(ev: Event) {
    return (ev.target as HTMLInputElement).value;
  }
}
