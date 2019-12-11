import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};




export type AddUserError = {
   __typename?: 'AddUserError',
  error: Scalars['String'],
};

export type AddUserResult = User | AddUserError;

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  addUser?: Maybe<AddUserResult>,
};


export type MutationAddUserArgs = {
  user: UserInput
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  context: Scalars['String'],
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  age: Scalars['Int'],
  friendIds: Array<Scalars['Int']>,
  friends: Array<User>,
};

export type UserInput = {
  name: Scalars['String'],
  birthdate: Scalars['String'],
};

export type AddUserMutationVariables = {
  user: UserInput
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'name'>
  ) | (
    { __typename: 'AddUserError' }
    & Pick<AddUserError, 'error'>
  )> }
);

export type UsersListQueryVariables = {};


export type UsersListQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);


export const AddUserDocument = gql`
    mutation AddUser($user: UserInput!) {
  addUser(user: $user) {
    __typename
    ... on User {
      id
      name
    }
    ... on AddUserError {
      error
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
    document = AddUserDocument;
    
  }
export const UsersListDocument = gql`
    query usersList {
  users {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersListGQL extends Apollo.Query<UsersListQuery, UsersListQueryVariables> {
    document = UsersListDocument;
    
  }