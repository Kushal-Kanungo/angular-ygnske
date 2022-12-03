import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username = '';
  userid = '';
  searched = 'Nothing';

  /* We are injecting Activated Route it will give us current route */
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* We are not using this becuase it is not dynmic */
    // this.userid = this.route.snapshot.params['id'];
    // this.username = this.route.snapshot.params['name'];

    /**
     * We will now listen to param change and run it whenever there is change in URL
     */
    this.route.params.subscribe((data: Params) => {
      this.userid = data['id'];
      this.username = data['name'];
    });

    /**
     * TO get the query params from the url
     */
    this.route.queryParams.subscribe((data) => {
      console.warn('You Searched for ', data['search']);
      console.warn('You Are On Page ', data['page']);
      this.searched = data['search'];
    });
  }
}
