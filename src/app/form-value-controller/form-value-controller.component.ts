import { Component, OnInit, Input, Output, Directive } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { Subject } from "rxjs";

// @Component({
//   selector: "app-form-value-controller",
//   templateUrl: "./form-value-controller.component.html",
//   styleUrls: ["./form-value-controller.component.css"]
// })
@Directive({ selector: "app-form-value-controller" })
export class FormValueControllerComponent
  implements OnInit, ControlValueAccessor {
  @Input() public ngControl?: NgControl;

  // We'll ask for each field's write and disabled methods so we can hook them into the
  // Forms API
  @Input()
  public writeValueFn: (value: any) => void = v => {};

  @Input()
  public setDisabledFn: (isDisabled: boolean) => void = b => {};

  // We'll expose these registered ControlValueAccessor methods so they can be called by
  // individual field components' DOM events

  // These are designed to be subscribed to by the container as events. The container
  // will bind these callbacks to the field components.
  @Output()
  public onChange$ = new Subject<
    (changeObj: { name: string; value: any }) => void
  >();

  @Output()
  public onTouched$ = new Subject<(touchedObj: { name: string }) => void>();

  constructor() {}

  ngOnInit() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.writeValueFn(value);
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.setDisabledFn(isDisabled);
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(changeHandler: (value: any) => any): void {
    // Emit the form API's change handler as an output
    this.onChange$.next(changeHandler);
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Emit the form API's touched handler as an output
    this.onTouched$.next(fn);
  }
}
