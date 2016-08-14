// Polyfills
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ts-helpers';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';

// const ENV_PROVIDERS = [];
enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS])
	.catch(err => console.error(err));
