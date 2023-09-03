import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'donuts-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(null),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm.valueChanges.subscribe(value => console.log(value));
  }
}
