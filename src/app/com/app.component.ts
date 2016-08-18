import {Component} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<h1>{{title}}</h1>
		<div>This project aim to be a basic starting point to create Angular2 application using a vendor dll (vendor.js) containing the base Angular 2 modules.</div>
		<c1-com></c1-com>
		<c2-com></c2-com>`
})
export class AppComponent {
	title = 'Starter - Angular 2 Vendor Dll';
}
