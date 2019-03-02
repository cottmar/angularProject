import { Component, EventEmitter, Output } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
}) 
export class HeaderComponent {
  //make it listenable to other components with OUtput. 
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}