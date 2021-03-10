import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public formGroup = new FormGroup({});

  onFormCreated(formGroup: FormGroup) {
    console.log("Form created:", formGroup.value);
    this.formGroup = formGroup;
  }
}
