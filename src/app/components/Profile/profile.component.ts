import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import * as $ from 'jquery';

interface Info {
    label: string;
    text?: string; // handles string
    data?: string[]; // handles string[]
}
interface Profile {
    src: string;
    title: string;
    info: Info[];
    bio: string;
}
interface Theme {
    primary: string;
    secondary: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    @Input() profile: Profile;
    @Input() theme: Theme;
    @Input() hideFunc: any; // function passed from parent which hides the ProfileComponent and returns to prev view
    public infoLabels: string[];
    sanitizedPrimary: any; // to allow primary theme color to be injected into template safely
    sanitizedSecondary: any; // to allow secondary theme color to be injected into template safely
    constructor() {}
    ngOnInit() {
        this.applyTheme(this.theme);
    }
    applyTheme(theme): void {
        /*
            Primary color applied to:
                .profile-bio h4 border-bottom
                .return-btn border
            Secondary color applied to:
                .return-btn:hover
        */
       $('.profile-bio h4').css('border-bottom', `1px solid ${theme.primary}`);
       $('.return-btn').css('border', `1px solid ${theme.primary}`);
       // $('.return-btn:hover').css('background', `${theme.primary}`);
        $('.return-btn').hover(() => {
            $('.return-btn').css('background', `${theme.primary}`);
        }, () => {
            $('.return-btn').css('background', `transparent`);
        });
    }
}
