import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement-form',
  templateUrl: './paiement-form.component.html',
  styleUrls: ['./paiement-form.component.css']
})

export class PaiementFormComponent {
  
  paiementForm!: FormGroup;
  validationError: string [] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router){}

  ngOnInit(){
      this.initPayementForm();
    }

  initPayementForm(){
    this.paiementForm = this.formBuilder.group({
      contact_email: [null, [Validators.required,]],
      delivery_firstname: [null, [Validators.required]],
      delivery_name: [null, [Validators.required]],
      delivery_country: [null, [Validators.required]],
      delivery_street: [null, [Validators.required]],
      // delivery_stage: [''],
      delivery_postcode: [null, [Validators.required]],
      delivery_city: [null, [Validators.required]],
      delivery_phone: [null, [Validators.required]],
      card_number:[null, [Validators.required]],
      card_userName: [null, [Validators.required]],
      card_expiration: [null, [Validators.required]],
      card_cvv: [null, [Validators.required]],
  })
}

  onPay(){
    this.validationError = [];
    console.log(this.paiementForm.value);

    if(this.paiementForm.invalid){
      Object.keys(this.paiementForm.controls).forEach((input)=>{
        const currentInput = this.paiementForm.get(input);
        if(currentInput && currentInput.status === "INVALID"){
          this.validationError.push(input);
        }
        // console.log(input,currentInput);
      })
      console.log(this.validationError)
    }else{
      this.router.navigate(['/paiement-succes']);
    }
  }

}


