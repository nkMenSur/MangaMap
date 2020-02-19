import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadDirective } from './directives/lazy-load.directive';

@NgModule({
  declarations: [LazyLoadDirective, LazyLoadDirective],
  imports: [
    HttpClientModule
  ],
  exports: [HttpClientModule, MDBBootstrapModule, LazyLoadDirective],
  providers: []
})

export class SharedModule { }
