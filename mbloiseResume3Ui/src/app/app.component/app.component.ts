import {Component, Optional, ViewEncapsulation, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
// import { Observable} from "rxjs/Observable";
import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router, Routes, RouterModule } from '@angular/router';
import {DataService} from "../data.service";

declare function test(): any;

@Component({
  selector: 'material2-app-app',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Material2AppAppComponent {
  isDarkTheme: boolean = false;
  rootStuff: Object;
  title = 'mbloiseResume3Ui';
  lastDialogResult: string;
  myEmail: string = 'mbloise3&#64;gmail.com';

  products: Observable<Array<string>>;
  errorMessage: string;
  productId: Number;
  randomness: Number;
  selected = '';
  currentPath = '';

  getRandomNumber(): number {
    return Math.random();
  }

  select(text: string) {
    this.selected = text;
    this.lastDialogResult = text;
  }

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(private data: DataService, private _dialog: MatDialog, /*private _mdsidenav: MdSidenav,*/ private _snackbar: MatSnackBar, private http: HttpClient, route: ActivatedRoute, private _router: Router ) {
    this.products = this.http.get('/products')  as Observable<Array<string>>;
    /*.map(res => res.json())
    .catch( err => {
        this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
        return Observable.empty();
    });*/
    this.productId = route.snapshot.params['id'];
    this.randomness = this.getRandomNumber();
    this.currentPath = this._router.url;
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  ngOnInit() {
    test();
    this.data.getRootInfo().subscribe(data => {
        this.rootStuff = data;
        console.log(this.rootStuff);
      }
    );
    this.data.getRootInfoWithParams('yo', 'dude').subscribe(data => {
        this.rootStuff = data;
        console.log(this.rootStuff);
      }
    );
  }

  getCurrentPath() {
    if (this.currentPath === '/')
      return true;
    else
      return false;
  }

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

  sendEmail() {
    window.open('mailto:' + this.myEmail + '?subject=Resume&body=Contacting you about your resume.', '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none');
  }

  navigateToHome() {
    this._router.navigate(["/"]);
    //this._mdsidenav.close();
  }
}


@Component({
  template: `

          <mat-toolbar color="primary" [ngStyle]="{'width':deviceWidthCss === 'App-name-mobile' ? '116%' : '111%' }" style="height: 3.15em; margin: 1em;">
              <img class="mdCardSmallDialogImg transparentProfilePic">
              <span id="center" class="textBottom largeFont" style="width: 50%; margin-left: -1em;">&nbsp;My Contact Info</span>
          </mat-toolbar>

          <table>
              <tr [class.App-buttons-mobile]='deviceWidthCss == "App-name-mobile"'>
                <td><a href="mailto:mbloise3&#64;gmail.com?Subject=Resume" style="color: blue;"><i class="material-icons md-18 iconBottom">email</i>mbloise3&#64;gmail.com</a></td>
                <td><a href="tel:610-308-1130" style="color: blue"><i class="material-icons md-18 iconBottom">phone_iphone</i>610-308-1130</a></td>
              </tr>
          </table>
          <div class="centerIt2">
              <button mat-raised-button (click)="dialogRef.close('done')">Done</button>
          </div>

  `,
})
export class DialogContent {
  deviceWidthCss = '';
  componentDidMount() {
    // set mobile layout
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.deviceWidthCss = "App-name-mobile";
    } else {
      this.deviceWidthCss = "App-name";
    }
  }
  constructor(@Optional() public dialogRef: MatDialogRef<DialogContent>) {
    this.componentDidMount();
  }
}
