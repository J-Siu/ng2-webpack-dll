import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { SimpleApiClient } from 'simple-api-client-ng2';
import { AppComponent } from './com/app.component';
import { C1Com } from './com/c1.com';
import { C2Com } from './com/c2.com';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		C1Com,
		C2Com
	],
	providers: [
		SimpleApiClient
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
