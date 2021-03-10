import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-form-field",
  templateUrl: "./custom-form-field.component.html",
  styleUrls: ["./custom-form-field.component.css"]
})
export class CustomFormFieldComponent implements OnInit {
  @Input()
  public fieldName: string = "";

  @Input()
  public placeHolder: string = "";

  @Input()
  public disabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
