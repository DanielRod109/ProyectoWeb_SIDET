import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './customers/sales/car/car.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ProductComponent } from './admin/books/product/product.component';
import { RegisterComponent } from './customers/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './customers/login/login.component';
import { ConfirmationComponent } from './customers/confirmation/confirmation.component';
import { ResetpasswordComponent } from './customers/resetpassword/resetpassword.component';
import { CategoryComponent } from './admin/categories/category/category.component';
import { CategoryFormComponent } from './admin/categories/category-form/category-form.component';
import { GenreComponent } from './admin/genus/genre/genre.component';
import { GenreFormComponent } from './admin/genus/genre-form/genre-form.component';
import { SubgenreComponent } from './admin/subgenres/subgenre/subgenre.component';
import { SubgenreFormComponent } from './admin/subgenres/subgenre-form/subgenre-form.component';
import { GenressubgenreComponent } from './admin/genresubgenre/genressubgenre/genressubgenre.component';
import { GenresubgenreFormComponent } from './admin/genresubgenre/genresubgenre-form/genresubgenre-form.component'; 
import { MainComponent } from './customers/main/main.component';
import { ProductFormComponent } from './admin/books/product-form/product-form.component';
import { AuthorComponent } from './admin/authors/author/author.component';
import { AuthorFormComponent } from './admin/authors/author-form/author-form.component';
import { CustomersPurchasesComponent } from './customers/customers-purchases/customers-purchases.component';
import { FooterComponent } from './customers/templates/footer/footer.component';
import { SaleConfirmationComponent } from './customers/sales/sale-confirmation/sale-confirmation.component';
import { HeaderComponent } from './customers/templates/header/header.component';
import { UserFormComponent } from './admin/users/user-form/user-form.component';
import { UserComponent } from './admin/users/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginUsersComponent } from './admin/users/login-users/login-users.component';
import { ProductsMainComponent } from './customers/products-main/products-main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsDetailsComponent } from './customers/products-details/products-details.component';
import { BooksReportComponent } from './admin/reports/books-report/books-report.component';
import { SaleDetailsReportComponent } from './admin/reports/sale-details-report/sale-details-report.component';
import { SalesReportComponent } from './admin/reports/sales-report/sales-report.component';
import { ResetuserpasswordComponent } from './admin/users/resetuserpassword/resetuserpassword.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { ProfileFormComponent } from './customers/profile/profile-form/profile-form.component';
import { ProfileComponent } from './customers/profile/profile/profile.component';
import { ProfileUserformComponent } from './admin/users/profile/profile-userform/profile-userform.component';
import { ProfileUserComponent } from './admin/users/profile/profile-user/profile-user.component';
import { ConfirmSaleComponent } from './admin/confirm-sale/confirm-sale.component';
import { StockDialogComponent } from './admin/books/stock-dialog/stock-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    MenuComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmationComponent,
    ResetpasswordComponent,
    CategoryComponent,
    CategoryFormComponent,
    GenreComponent,
    GenreFormComponent,
    SubgenreComponent,
    SubgenreFormComponent,
    GenressubgenreComponent,
    GenresubgenreFormComponent,
    MainComponent,
    ProductFormComponent,
    AuthorComponent,
    AuthorFormComponent,
    CustomersPurchasesComponent,
    HeaderComponent,
    FooterComponent,
    SaleConfirmationComponent,
    ConfirmSaleComponent,
    UserFormComponent,
    UserComponent,
    LoginUsersComponent,
    ProductsMainComponent,
    ProductsDetailsComponent,
    BooksReportComponent,
    SaleDetailsReportComponent,
    SalesReportComponent,
    ResetuserpasswordComponent,
    CustomersComponent,
    ProfileFormComponent,
    ProfileComponent,
    ProfileUserformComponent,
    ProfileUserComponent,
    StockDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
