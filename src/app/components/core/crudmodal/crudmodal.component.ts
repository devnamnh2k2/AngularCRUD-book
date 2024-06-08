import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crudmodal',
  templateUrl: './crudmodal.component.html',
  styleUrl: './crudmodal.component.css'
})
export class CRUDModalComponent implements OnInit{
  @Input() book: Book | null = null;
  @Input() mode: 'view' | 'edit' = 'view';
  @Output() updateBook  = new EventEmitter<FormGroup>();
  formUpdate: FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(5)]),
    type: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required]),
    publisher: new FormControl('',[Validators.required]),
    price: new FormControl(0),
    quantity: new FormControl(0,[Validators.min(0)])
  })

  ngOnInit(): void {
    
  }

  onUpdate() {
    this.updateBook.emit(this.formUpdate.value);
  }
  

  
}
