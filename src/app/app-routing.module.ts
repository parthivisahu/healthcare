import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VideoConferencingComponent } from './components/video-conferencing/video-conferencing.component';
import { MeetingSchedulerComponent } from './meeting-scheduler/meeting-scheduler.component';
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorsComponent },
  { path: 'patient', component: PatientsComponent},
  { path : 'video-conferencing', component: VideoConferencingComponent},
  { path:'meet-scheduler', component: MeetingSchedulerComponent},
  // add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }