import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-phone-listing',
  templateUrl: './phone-listing.component.html',
  styleUrls: ['./phone-listing.component.css']
})
export class PhoneListingComponent implements OnInit {

  listings: any[] = [];
  page: number = 0;
  pageSize: number = 0;
  collectionSize: number = 0;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getlisting(1);
  }

  getlisting(page) {
    this.authService.phoneListing(page)
      .subscribe(result => {
        if (result.data) {
          this.listings = result.data.data;
          this.page = result.data.current_page;
          this.pageSize = result.data.per_page;
          this.collectionSize = result.data.total;
        }
      });
  }

  pageChange($event) {
    this.getlisting($event);
  }

}
