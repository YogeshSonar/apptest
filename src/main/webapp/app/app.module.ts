import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Newapps1SharedModule } from 'app/shared/shared.module';
import { Newapps1CoreModule } from 'app/core/core.module';
import { Newapps1AppRoutingModule } from './app-routing.module';
import { Newapps1HomeModule } from './home/home.module';
import { Newapps1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Newapps1SharedModule,
    Newapps1CoreModule,
    Newapps1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Newapps1EntityModule,
    Newapps1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Newapps1AppModule {}
