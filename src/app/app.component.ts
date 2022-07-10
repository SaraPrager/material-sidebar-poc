import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile: boolean = false;
  isLoggedIn: boolean = true;
  sidenavIsOpen: boolean = false;
  user: any = undefined;
  copyrightText: string = '© copyright text here...'

  @ViewChild('drawer') drawer : any;
  @ViewChild('sidenav') sidenav: any;

  headerIcons: { name: string, url?: string }[] = [
    { name: 'alarm', url: '/'},
    { name: 'help', url: '/'},
    { name: 'settings', url: '/'},
    { name: 'logout' },
  ];

  sidebarLinks: { label: string, url: string, icon: string }[] = [
    { label: 'Dashboard', url: 'dashboard', icon: 'dashboard'},
    { label: 'Devices', url: 'devices', icon: 'devices'},
    { label: 'Users', url: 'users', icon: 'people'},
    { label: 'Event Log', url: 'event-log', icon: 'event'},
    { label: 'Accounting Log', url: 'accounting-log', icon: 'history'},
  ];

  constructor() {
  }

  onLogout() {
  }

  // Desktop menu toggle
  onToggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  // Mobile menu toggle
  onToggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
      this.sidenavIsOpen = !this.sidenavIsOpen;
    }
  }
}
