export class NodeModel {
  type: 'folder' | 'file' | 'unset' | null;
  name?: string;
  children?: NodeModel[];
  id: number;
  enableAddNewChildFolder?: boolean;
  enableAddNewChildFile?: boolean;
  enableAddNewActions?:boolean

  constructor() {
    this.type = 'folder';
    this.id = -1;
  }

  addNewChildActions(rootFolder: NodeModel): void {
    rootFolder.enableAddNewActions = true;
  }
  addNewChild(rootFolder: NodeModel, type: string): void {
    rootFolder.enableAddNewActions = false;
    if (type === 'file') {
      rootFolder.enableAddNewChildFile = true;
    }
    else if (type === 'folder') {
      rootFolder.enableAddNewChildFolder = true;
    }
  }
  newFileAdded(nodeModel: NodeModel, rootFolder: NodeModel): void {
    if (!rootFolder.children) {
      rootFolder.children = []
    }
    rootFolder.children = [...rootFolder.children, nodeModel];
    rootFolder.enableAddNewChildFile = false;
  }

}
export interface RootFolders {
  rootFolders: NodeModel[];
}
