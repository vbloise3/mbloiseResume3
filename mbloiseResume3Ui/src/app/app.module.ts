import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatSnackBarModule, MatIconModule} from '@angular/material';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component/app.component';
import {PersonalInterestsComponent, DialogContent2} from './personalInterests.component/personalInterests.component';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo.component';
import { AppComponent } from './appComponent/appComponent';
import { AppComponent1 } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';


// Define the routes
const appRoutes: Routes = [
  {
    path: 'tester',
    component: TestComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent1,
    Material2AppAppComponent,
    DialogContent,
    DialogContent2,
    AppComponent,
    TestComponent,
    HomeComponent,
    PageNotFoundComponent,
    PersonalInterestsComponent,
    YoMoFoComponent
  ],
  imports: [
    ReactiveFormsModule,
    routing,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents: [DialogContent, DialogContent2],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
