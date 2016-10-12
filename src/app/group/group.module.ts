import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GroupsComponent } from './groups.component';
import { GroupService } from './group.service';


@NgModule ({
    declarations: [GroupsComponent],
    imports: [BrowserModule, HttpModule, JsonpModule],
    exports: [GroupsComponent],
    providers: [GroupService]

})
export class GroupModule {

}
