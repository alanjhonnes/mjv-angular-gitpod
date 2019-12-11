import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Query } from 'src/types';
import { UsersListGQL, UsersListQuery, AddUserGQL } from 'src/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  loading: boolean = false;
  data: UsersListQuery;
  userListQuery: QueryRef<any>;

  constructor(private userListGQL: UsersListGQL, private addUserGQL: AddUserGQL) {
   this.userListQuery =this.userListGQL.watch(undefined, {
     fetchPolicy: "cache-and-network"
   });
   this.userListQuery
    .valueChanges
    .subscribe(result => {
      this.loading = result.loading;
      this.data = result.data;
    });
  }


  addUser() {
    this.addUserGQL.mutate({
      user: {
        name: "error",
        birthdate: "2000-10-10",
      }
    }, {
      optimisticResponse: {
        __typename: "Mutation",
        addUser: {
          __typename: "User",
          id: (parseInt(this.data.users[this.data.users.length -1].id, 10) + 1).toString(),
          name: "Alan sx",
        }
      },
      update: (store, result) => {
        const addUser = result.data.addUser;
        if (addUser.__typename === "AddUserError") {
          return;
        }
        // Read the data from our cache for this query.
        const data = store.readQuery<UsersListQuery>({ query: this.userListGQL.document });
        // Add our comment from the mutation to the end.
        const newData: UsersListQuery = {
          __typename: "Query",
          users: [
            ...data.users,
            addUser
          ]
        };
        // Write our data back to the cache.
        store.writeQuery({ query:  this.userListGQL.document, data: newData });
      },
    })
    .subscribe(result => {
      console.log(result);
    }, error => {

    })
  }


  refresh() {
    this.userListQuery.refetch();
  }
}
