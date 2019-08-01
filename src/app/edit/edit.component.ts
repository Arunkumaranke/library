import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookForm;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public router: Router) {
    this.bookForm = new FormGroup({
      "title": new FormControl(),
      "Description": new FormControl(),
      "Image": new FormControl(),
      "Author": new FormControl()
    }
    );
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    this.http.get(`https://5d204f693036a60014d68b2c.mockapi.io/bookLib/${this.activatedRoute.snapshot.paramMap.get('id')}`)
      .toPromise()
      .then((response: any) => {
        this.bookForm.setValue({
          "title": response.title,
          "Description": response.Description,
          "Author": response.Author,
          "Image": response.Image
        }
        );
      },
        (error) => {
          console.log(error);
        }
      );



  }

  postBook() {

// tslint:disable-next-line: max-line-length
    this.http.put(`https://5d204f693036a60014d68b2c.mockapi.io/bookLib/${this.activatedRoute.snapshot.paramMap.get('id')}`, this.bookForm.value)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.router.navigate(['dashboard/listbook']);
      },
        (error) => {
           console.log(error);
        }
      );
  }

}
