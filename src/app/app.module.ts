import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreatebotComponent } from './createbot/createbot.component';
import { WidgetPreviewComponent } from './widget-preview/widget-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatebotComponent,
    WidgetPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
