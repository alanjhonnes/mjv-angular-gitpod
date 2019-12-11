import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsersListComponent,
    UserComponent
  ]
})
export class UsersModule { }
