import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomFormDirective } from "./custom-form/custom-form.directive";
import { CustomFormFieldComponent } from "./custom-form-field/custom-form-field.component";
import { FormInputFieldComponent } from './form-input-field/form-input-field.component';
import { FormContainerComponent } from './form-container/form-container.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomFormDirective,
    CustomFormFieldComponent,
    FormInputFieldComponent,
    FormContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
