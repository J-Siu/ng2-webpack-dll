import {Component, OnInit} from '@angular/core';
import {SimpleApiClient, SimpleApiObj } from 'simple-api-client-ng2';
@Component({
	selector: 'app-component',
	template: `
		<h1>{{title}}</h1>
		<div>This project aim to be a basic starting point to create Angular2 application using a vendor dll (vendor.js) containing the base Angular 2 modules.</div>
		<p>Following are 2 components</p>
		<c1-com></c1-com>
		<c2-com></c2-com>
		<p>Run <a href="https://github.com/J-Siu/simple-api-example-ng2-express">simple-api-example-ng2-express</a> to test following function.</p>
		<div><input [(ngModel)]="echoMsg1"><button (click)="echo1()">Echo</button></div>
		<div>Reply: {{echoReply1}}</div>`
})
export class AppComponent implements OnInit {
	title = 'Starter - Angular 2 Vendor Dll';
	echoMsg1 = '';
	echoReply1 = '';
	apiDemo: SimpleApiObj;
	constructor(private api: SimpleApiClient) { }
	ngOnInit() {
		this.apiDemo = this.api.get('http://localhost:4000/demo');
	}
	echo1() {
		this.apiDemo.call('echo', this.echoMsg1, r => this.echoReply1 = r);
	}
}
