import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InnerSampleComponent } from './sample/inner-sample.component';
import { MyStyleComponent } from './my-style/my-style.component';
import { InStyleComponent } from './my-style/in-style.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    InnerSampleComponent,
    MyStyleComponent,
    InStyleComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
