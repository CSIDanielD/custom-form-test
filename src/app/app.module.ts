import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomFormDirective } from "./custom-form/custom-form.directive";
import { CustomFormFieldComponent } from "./custom-form-field/custom-form-field.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomFormDirective,
    CustomFormFieldComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
