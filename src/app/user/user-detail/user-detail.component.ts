import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userDetails: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe(
      (loggedInUser: any) => {
        this.userService.getUsers().subscribe(
          (users: any[]) => {
            this.userDetails = users.find(
              (user) => user.username === loggedInUser.username
            );
          },
          (error: any) => {
            console.error('Error obteniendo los usuarios', error);
          }
        );
      },
      (error: any) => {
        console.error('Error obteniendo el usuario logueado', error);
      }
    );
  }
}