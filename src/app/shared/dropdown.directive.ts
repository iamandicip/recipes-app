import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') openState = false;

    @HostListener('click') toggleOpen(eventData: Event) {
        this.openState = !this.openState;
    }
}
