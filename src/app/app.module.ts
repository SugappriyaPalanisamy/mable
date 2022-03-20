import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNewFolderComponent } from './components/add-new-folder/add-new-folder.component';
import { ChildNodeComponent } from './components/child-node/child-node.component';
import { AddNewFileComponent } from './components/add-new-file/add-new-file.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewFolderComponent,
    ChildNodeComponent,
    AddNewFileComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
