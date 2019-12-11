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
