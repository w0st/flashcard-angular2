import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GroupsComponent } from './groups.component';
import { GroupService } from './group.service';
import { RouterModule } from '@angular/router';
import { FlipcardModule } from '../flipcard/flipcard.module';
import { GroupComponent } from './group.component';


@NgModule ({
    declarations: [GroupsComponent, GroupComponent],
    imports: [BrowserModule, HttpModule, RouterModule, FlipcardModule],
    exports: [GroupsComponent],
    providers: [GroupService]

})
export class GroupModule {

}
