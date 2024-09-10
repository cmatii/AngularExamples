import { Routes } from '@angular/router';
import { MyStandaloneComponentComponent } from './my-standalone-component/my-standalone-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


export const routes: Routes = [
    { path: 'hellorWorld-component', component: HelloWorldComponent },
    { path: 'mystandAlones-component', component: MyStandaloneComponentComponent}
];


