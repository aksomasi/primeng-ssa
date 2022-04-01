import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {AppComponent} from "../../app.component";
import {ConfigService} from "../../config.service";
import {AppConfig} from "../../model/app.interface";
import {Subscription} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppMainComponent implements OnInit, OnDestroy {
  public menuInactiveDesktop!: boolean;

  public menuActiveMobile!: boolean;

  public overlayMenuActive!: boolean;

  public staticMenuInactive: boolean = false;

  public profileActive!: boolean;

  public topMenuActive!: boolean;

  public topMenuLeaving!: boolean;

  public theme!: string;

  documentClickListener!: () => void;

  menuClick!: boolean;

  topMenuButtonClick!: boolean;

  configActive!: boolean;

  configClick!: boolean;

  config!: AppConfig;

  subscription!: Subscription;
  breadcrumbItems!: MenuItem[];

  constructor(public renderer: Renderer2, public app: AppComponent, public configService: ConfigService) { }


  ngOnInit(): void {
    this.breadcrumbItems = [];
    this.breadcrumbItems.push({ label: 'Electronics' });
    this.breadcrumbItems.push({ label: 'Computer' });
    this.breadcrumbItems.push({ label: 'Notebook' });
    this.breadcrumbItems.push({ label: 'Accessories' });
    this.breadcrumbItems.push({ label: 'Backpacks' });
    this.breadcrumbItems.push({ label: 'Item' });

    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);

  }
  ngAfterViewInit() {
    // hides the overlay menu and top menu if outside is clicked
    this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
      if (!this.isDesktop()) {
        if (!this.menuClick) {
          this.menuActiveMobile = false;
        }

        if (!this.topMenuButtonClick) {
          this.hideTopMenu();
        }
      }
      else {
        if (!this.menuClick && this.isOverlay()) {
          this.menuInactiveDesktop = true;
        }
        if (!this.menuClick){
          this.overlayMenuActive = false;
        }
      }

      if (this.configActive && !this.configClick) {
        this.configActive = false;
      }

      this.configClick = false;
      this.menuClick = false;
      this.topMenuButtonClick = false;
    });
  }
  toggleTopMenu(event: Event) {
    this.topMenuButtonClick = true;
    this.menuActiveMobile = false;

    if (this.topMenuActive) {
      this.hideTopMenu();
    } else {
      this.topMenuActive = true;
    }

    event.preventDefault();
  }
  hideTopMenu() {
    this.topMenuLeaving = true;
    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 1);
  }

  onConfigClick(event: any) {
    this.configClick = true;
  }

  toggleMenu(event: Event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.app.menuMode === 'overlay') {
        if(this.menuActiveMobile === true) {
          this.overlayMenuActive = true;
        }

        this.overlayMenuActive = !this.overlayMenuActive;
        this.menuActiveMobile = false;
      }
      else if (this.app.menuMode === 'static') {
        this.staticMenuInactive = !this.staticMenuInactive;
      }
    }
    else {
      this.menuActiveMobile = !this.menuActiveMobile;
      this.topMenuActive = false;
    }

    if(event){
      event.preventDefault();
    }
  }

  isDesktop() {
    return window.innerWidth > 992;
  }

  isMobile(){
    return window.innerWidth < 1024;
  }
  isStatic() {
    return this.app.menuMode === 'static';
  }

  isOverlay() {
    return this.app.menuMode === 'overlay';
  }
  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }


    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
