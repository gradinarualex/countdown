/**
 * Created by Alexander Gardner on 12/2/2016.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: 'cd-button',
    template: `
        <button class="col s6 btn waves-effect waves-light light-blue darken-4"
            [ngClass]="{disabled: disable}">
            <ng-content></ng-content>           
        </button>
    `
})

export class ButtonComponent {
    @Input() disable:boolean = false;
}