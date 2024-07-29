import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { TrackregisterComponent } from './trackregister/trackregister.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { StaffhomepageComponent } from './staffhomepage/staffhomepage.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { MarksentryComponent } from './marksentry/marksentry.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { DepartmenttopperpageComponent } from './departmenttopperpage/departmenttopperpage.component';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },{
    path:'contact',
    component:ContactComponent

  },{
    path:'login',
    component:LoginComponent

  },{
    path:'staffhomepage',
    component:StaffhomepageComponent

  },{
    path:'entrypage',
    component:EntrypageComponent

  },
  {
    path:'about',
    component:AboutComponent
  },{
    path:'marksentry',
    component:MarksentryComponent

  },{
    path:'studententrypage',
    component:StudenthomepageComponent

  },{
    path:'staffentrypage',
    component:StaffhomepageComponent

  },{
    path:'aboutdepartment',
    component:AboutComponent

  },{
    path:'departmenttopperpage',
    component:DepartmenttopperpageComponent
  },
  {
    path:'gallery',
    component:GalleryComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'trackregister',
    component: TrackregisterComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];
