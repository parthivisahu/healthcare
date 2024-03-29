import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import RouterModule
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DoctorDialogComponent } from './components/doctor-dialog/doctor-dialog.component'; // Import MatDialogModule
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule }from '@angular/material/snack-bar';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDialogComponent } from './components/patient-dialog/patient-dialog.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MeetingSchedulerComponent } from './meeting-scheduler/meeting-scheduler.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoConferencingComponent } from './components/video-conferencing/video-conferencing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DoctorsComponent,
    DoctorDialogComponent,
    PatientsComponent,
    PatientDialogComponent,
    BookAppointmentComponent,
    MeetingSchedulerComponent,
    NavbarComponent,
    VideoConferencingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatIconModule, 
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule,
    ClipboardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }