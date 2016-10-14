import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'fc-navbar',
    templateUrl: 'app/shared/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
