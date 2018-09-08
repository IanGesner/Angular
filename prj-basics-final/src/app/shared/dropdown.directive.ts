import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from "node_modules/@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
    
   isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event){
        this.isOpen= !this.isOpen;
        if (this.isOpen) 
            this.renderer.addClass(this.eleRef.nativeElement, "open");
        else 
            this.renderer.removeClass(this.eleRef.nativeElement, "open");
    }
}