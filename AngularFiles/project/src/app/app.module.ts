import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PopComponent } from './login/pop/pop.component';
import { DelComponent } from './login/del/del.component';
import { DetComponent } from './login/det/det.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';

import { MatPaginatorModule } from '@angular/material/paginator';
import{MatToolbarModule}from '@angular/material/toolbar'
import { MatSortModule } from '@angular/material/sort';

import{MatIconModule} from'@angular/material/icon';
import{MatChipsModule} from'@angular/material/chips';
import{MatAutocompleteModule } from '@angular/material/autocomplete';
import{MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatDialogModule} from '@angular/material/dialog'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopComponent,
    DelComponent,
    DetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
