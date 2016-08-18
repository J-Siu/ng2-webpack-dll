import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './com/app.component';
import { C1Com } from './com/c1.com';
import { C2Com } from './com/c2.com';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		C1Com,
		C2Com
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
