import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector: 'cd-app',
    template: `
        <div class="row">
            <div class="col s12 m6 l4 offset-m3 offset-l4">
                <cd-title></cd-title>
                <cd-board></cd-board>
                <div>Score</div>
            </div>
        </div>
    `,
    styles: [`
        p {
            background-color: #01579b;
            color: #FFFFFF;
        }
        
        .row {
            margin-bottom: 0; 
        }
    `]
})
export class AppComponent {
    
}