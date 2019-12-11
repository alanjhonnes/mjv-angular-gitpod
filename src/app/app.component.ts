import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mjv-angular-gitpod';

  data: any;

  constructor(private apollo: Apollo) {
    this.apollo.query({
      query: gql`
      query usersList {
  users {
    id
    name
  }
}
      `
    })
    .subscribe(result => {
      this.data = result.data;
    })
  }
}
