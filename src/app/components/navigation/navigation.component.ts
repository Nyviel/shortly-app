import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('mobileHamburger') mobileHamburger: ElementRef = {} as ElementRef;
  @ViewChild('primaryNavigation') primaryNavigation: ElementRef =
    {} as ElementRef;
  mobileNavigation: Record<string, string> = {};

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.mobileHamburger.nativeElement, 'click', () => {
      this.primaryNavigation.nativeElement.toggleAttribute(
        'display-mobile-nav'
      );
    });
  }
}
