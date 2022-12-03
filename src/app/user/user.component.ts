import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username = '';
  userid = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];
    this.username = this.route.snapshot.params['name'];
  }
}
