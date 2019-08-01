import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm;
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      "title": new FormControl(),
      "Description": new FormControl(),
      "Image": new FormControl(),
      "Author": new FormControl()
    }
    );
  }

  postBook() {
    console.log(this.bookForm.value);
    this.http.post('https://5d204f693036a60014d68b2c.mockapi.io/bookLib', this.bookForm.value)
      .toPromise()
      .then((response) => {
        this.router.navigate(['dashboard/listbook']);
        console.log(response);
      }, (error) => {
        console.log(error);
      }
      );
  }

}
