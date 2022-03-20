import { Component, ViewEncapsulation } from '@angular/core';
import { NodeModel, RootFolders } from '../model/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mable-app';
  enableAddNewRootFolder: boolean = false;
  rootFolders: NodeModel[];


  constructor() {

  }

  addNewRootFolder(): void {
    this.enableAddNewRootFolder = true;
  
  }
  newFolderAdded(nodeModel: NodeModel, rootFolder?: NodeModel): void {

    this.enableAddNewRootFolder = false;
    if (!nodeModel)
      return;

    if (!rootFolder) {
     
      if (!this.rootFolders) {
        this.rootFolders = [];
      }
      this.rootFolders = [...this.rootFolders, nodeModel]
    }
    else {
      if (!rootFolder.children) {
        rootFolder.children = []
      }
      rootFolder.children = [...rootFolder.children, nodeModel];
      rootFolder.enableAddNewChildFolder = false;
    }
  }
  deleteRootFolder(rootFolder) {
    this.rootFolders = this.rootFolders.filter(folder => folder != rootFolder);
  }


}
