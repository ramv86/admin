import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls:  ['app/app.component.css']
})

export class AppComponent {
	title = "ITE Branch Cycle Management Control";
	user_name = "ITE User";
	business_title = "BUSINESS DATE";
	config_title = "CONFIGURATION MANAGEMENT";
	choose_title = "Choose Stops";

	navigations = ['Dashboard', 'Configuration Management', 'Monitor & Control'];
	active_menu = "Dashboard";
}