import { NgModule } from '@angular/core';
import { FlipcardComponent } from './flipcard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [FlipcardComponent],
    exports: [FlipcardComponent]
})
export class FlipcardModule {

}
