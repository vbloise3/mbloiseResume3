/**
 * Created by vincebloise on 3/20/17.
 */

import {Component, Optional, ViewEncapsulation} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/empty';
// import { Observable} from "rxjs/Observable";
import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'personal-interests',
    templateUrl: './personalInterests.component.html',
    styleUrls: ['./personalInterests.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonalInterestsComponent {
    isDarkTheme: boolean = false;
    lastDialogResult: string;
    myEmail: string = 'vbloise3@gmail.com';

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

    constructor(private _dialog: MatDialog, /*private _mdsidenav: MdSidenav,*/ private _snackbar: MatSnackBar, private http: HttpClient, route: ActivatedRoute, private _router: Router ) {
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

    getCurrentPath() {
        if (this.currentPath === '/')
            return true;
        else
            return false;
    }

    openDialog() {
        let dialogRef = this._dialog.open(DialogContent2);

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
    <!--div id="container" class="centerIt"-->
        <mat-toolbar color="primary" [ngStyle]="{'width':deviceWidthCss === 'App-name-mobile' ? '116%' : '111%' }" style="height: 3.15em; margin-left: -1em; margin-top: -1em;">            
            <img class="mdCardSmallDialogImg transparentProfilePic">
            <span id="center" class="textBottom largeFont" style="width: 50%; margin-left: -1em;">&nbsp;My Contact Info</span>            
        </mat-toolbar>
    <!--/div-->
    <table>
        <tr [class.App-buttons-mobile]='deviceWidthCss == "App-name-mobile"'>
          <td><a href="mailto:meb339@scarletmail.rutgers.edu?Subject=Resume" style="color: blue;"><i class="material-icons md-18 iconBottom">email</i>meb339@scarletmail.rutgers.edu</a></td>
          <td><a href="tel:610-308-1130" style="color: blue"><i class="material-icons md-18 iconBottom">phone_iphone</i>610-308-1130</a></td>
        </tr>
    </table>
    <div class="centerIt2">
        <button mat-raised-button (click)="dialogRef.close('done')">Done</button>
    </div>
  `,
})
export class DialogContent2 {
  deviceWidthCss = '';
  componentDidMount() {
    // set mobile layout
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.deviceWidthCss = "App-name-mobile";
    } else {
      this.deviceWidthCss = "App-name";
    }
  }
    constructor(@Optional() public dialogRef: MatDialogRef<DialogContent2>) {
     this.componentDidMount();
    }
}
