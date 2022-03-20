import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NodeModel } from '../../../model/node.model';


@Component({
  selector: 'app-add-new-folder',
  templateUrl: './add-new-folder.component.html',
  styleUrls: ['./add-new-folder.component.scss']
})
export class AddNewFolderComponent implements OnInit {

  newFolder: NodeModel;
  @Input() id: number = 0;
  @Output() newFolderAdded =  new EventEmitter<NodeModel | null>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewFolder(name: string): void {
    if (!name)
      return;
    this.newFolder = new NodeModel();
    this.newFolder.id = this.id ? this.id++ : 1;
    this.newFolder.type = 'folder';
    this.newFolder.name = name;
    this.newFolderAdded.emit(this.newFolder );

  }
  cancel(): void {
    this.newFolderAdded.emit(null);
  }
}
