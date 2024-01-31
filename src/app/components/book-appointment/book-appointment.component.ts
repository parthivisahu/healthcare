import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
})
export class BookAppointmentComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.fb.group({
      patient: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  bookAppointment(): void {
    if (this.appointmentForm.valid) {
      this.appointmentService.bookAppointment(this.appointmentForm.value).subscribe(() => {
        // Show confirmation message
      });
    }
  }
}