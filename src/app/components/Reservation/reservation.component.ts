import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
    /*
      + Set up Reactive Forms
    */
  }
  createForm(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required ],
      date: [new Date(), Validators.required ],
      startTime: ['', Validators.required ],
      endTime: ['', Validators.required ],
      message: ''
    });
  }
  makeReservation(): void {
    const reservationModel: any = this.reservationForm.value;

    console.log('Reservation Model', reservationModel);
  }
}


