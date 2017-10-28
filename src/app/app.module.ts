import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InnerSampleComponent } from './sample/inner-sample.component';
import { MyStyleComponent } from './my-style/my-style.component';
import { InStyleComponent } from './my-style/in-style.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RatingBarComponent } from './databinding/rating-bar/rating-bar.component';
import { RatingInfoComponent } from './databinding/rating-info/rating-info.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { InnerContentComponent } from './content-projection/inner-content.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { AttrDirComponent } from './directives/attr-dir.component';
import { ResizerDirective } from './directives/resizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    InnerSampleComponent,
    MyStyleComponent,
    InStyleComponent,
    DatabindingComponent,
    RatingBarComponent,
    RatingInfoComponent,
    ContentProjectionComponent,
    InnerContentComponent,
    LocalRefsComponent,
    LifecycleComponent,
    DirectivesComponent,
    ThirdPartyComponent,
    AttrDirComponent,
    ResizerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
