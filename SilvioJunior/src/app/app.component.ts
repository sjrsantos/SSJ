import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SilvioJunior';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://raw.githubusercontent.com/argallel/INFO3067/main/RubberDucks'
      )
      .subscribe((data) => {
        this.data = data;
      });
  }
}
