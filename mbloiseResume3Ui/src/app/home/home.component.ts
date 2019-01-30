import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'http-client',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  products: Observable<Array<string>>;
  errorMessage: string;
  productId: Number;
  randomness: Number;

  getRandomNumber(): number {
    return Math.random();
  }

  constructor(private http: HttpClient, route: ActivatedRoute) {
    /*this.products = this.http.get('/products') as Observable<Array<string>>;*/
    /*.map(res => res.json())
    .catch( err => {
        this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
        return Observable.empty();
    });*/
    /*this.productId = route.snapshot.params['id'];
    this.randomness = this.getRandomNumber();*/
  }

  ngOnInit() {
  }

}
