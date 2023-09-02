import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavMenuComponent],
  exports:[FooterComponent, HeaderComponent, NavMenuComponent],
  imports: [CommonModule],
})
export class SharedModule {}
