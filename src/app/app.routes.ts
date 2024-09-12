import { Routes } from '@angular/router';
import { MyStandaloneComponentComponent } from './my-standalone-component/my-standalone-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    { path: 'hellorWorld-component', component: HelloWorldComponent },
    { path: 'mystandAlones-component', component: MyStandaloneComponentComponent},
    { path: 'home-component', component: HomeComponent}
];


