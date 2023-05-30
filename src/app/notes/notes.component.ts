import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  ngOnInit(): void {

  }
  myForm: FormGroup;
  comments: number[] = [];
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^(?!admin|administrator).*$/)]],
      product: ['', Validators.required],
      hasDiscount: [false],
      discount: ['', Validators.required],
      comments0: ['']
    });
  }

  addComment() {
    const index = this.comments.length;
    this.comments.push(index);
    this.myForm.addControl(`comments${index}`, this.fb.control(''));
  }

  onSubmit() {
    console.log(
      this.comments.length,
      this.myForm.value.name,
      this.myForm.value.comments0
    )
  }
}
