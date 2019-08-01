import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  bookForm;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('https://5d204f693036a60014d68b2c.mockapi.io/bookLib')
      .toPromise()
      .then((response) => {
        this.bookForm = response;
      }, (error) => {
        console.log(error);
      }
      );
  }

  deleteBook(id) {
    let result = confirm('Are you sure do you want to delete?');
    if (result == true) {
      console.log(id);
      this.http.delete(`https://5d204f693036a60014d68b2c.mockapi.io/bookLib/${id}`)
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadData();
        },
          (error) => {
            console.log(error);
          }
          );
    }
  }

}
