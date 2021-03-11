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
export class FormInputFieldComponent {
  @Input() fieldName: string = "";
  @Input() disabled: boolean = false;
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: "text" | "email" | "password" = "text";
  @Input() value = this.placeholder;

  @Output()
  @ViewChild("fieldTemplate", { read: TemplateRef })
  fieldTemplate: TemplateRef<any>;

  onChange(value: any) {}
  onTouched() {}

  getHTMLEventValue(ev: Event) {
    return (ev.target as HTMLInputElement).value;
  }
}
