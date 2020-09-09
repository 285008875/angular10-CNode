import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styles: [`
        nz-content { 
            padding: 0 50px;
        }
`],
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
