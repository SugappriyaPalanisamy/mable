import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NodeModel } from '../../../model/node.model';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss']
})
export class ChildNodeComponent implements OnInit {
  @Input() childNodes: NodeModel[];
  @Output() childNodesChange = new EventEmitter<NodeModel[] | null>();
  constructor() { }

  ngOnInit(): void {
  }
  newChildFolder(nodeModel: NodeModel, childFolder): void {

    if (!nodeModel)
      return;


    if (!childFolder.children) {
      childFolder.children = []
    }
    childFolder.children = [...childFolder.children, nodeModel];
    childFolder.enableAddNewChildFolder = false;
  }
  deleteFolder(childFolder) {
    this.childNodes = this.childNodes.filter(folder => folder != childFolder);
    this.childNodesChange.emit(this.childNodes)
  }

}
