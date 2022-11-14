import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, UsersModule],
  declarations: [AppComponent, HelloComponent, UserListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
