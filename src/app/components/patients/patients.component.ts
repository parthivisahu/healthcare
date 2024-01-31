import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Patient } from '../../../interfaces/patient.interface';
import { PatientService } from '../../../services/patient.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'phone', 'bloodGroup', 'age','injuryDepartment', 'options'];
  dataSource = new MatTableDataSource<Patient>([]);
  patients: Patient[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private patientService: PatientService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '350px',
      data: {
        id: 0,
        image: '',
        name: '',
        email: '',
        assignedDoctor: '',
        dob: new Date(),
        phoneNumber: '',
        bloodGroup: '',
        balanceDue: 0
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.patients.push(result);
      }
    });
  }

  editPatient(patient: Patient): void {
    const index = this.patients.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
    }
  }

  viewPatientDetails(patient: Patient): void {
    console.log(patient);
    // Display the patient details here
  }

  deletePatient(id: number): void {
    const index = this.patients.findIndex(p => p.id === id);
    if (index !== -1) {
      this.patients.splice(index, 1);
    }
  }

  viewInvoice(patient: Patient): void {
    console.log(`Invoice for patient ${patient.id}`);
    // View the patient's invoice here
  }
  printPatients(): void {
    window.print();
  }
}