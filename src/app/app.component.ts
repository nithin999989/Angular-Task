import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { AboutdepartmentComponent } from './aboutdepartment/aboutdepartment.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { DepartmenttopperpageComponent } from './departmenttopperpage/departmenttopperpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,IndexComponent,RegisterComponent,TrackregisterComponent,AboutComponent,GalleryComponent,ContactComponent,LoginComponent,StaffhomepageComponent,EntrypageComponent,TrackregisterComponent,MarksentryComponent,AboutdepartmentComponent,StudenthomepageComponent,StaffhomepageComponent,DepartmenttopperpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-project';
}
