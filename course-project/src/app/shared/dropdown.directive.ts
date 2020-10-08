import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    // for just toggle open and close
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    // for toggle open and close also close when click anywhere else in screen
    @HostListener('document:click', ['$event']) toggleOpen(event:Event) {
        this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private eleRef: ElementRef) {}

}