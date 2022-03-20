import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NodeModel } from '../../../model/node.model';

@Component({
  selector: 'app-add-new-file',
  templateUrl: './add-new-file.component.html',
  styleUrls: ['./add-new-file.component.scss']
})
export class AddNewFileComponent implements OnInit {
  newFile: NodeModel;
  @Input() id: number = 0;
  @Output() newFileAdded = new EventEmitter<NodeModel | null>();

  constructor() { }

  ngOnInit(): void {
  }
  addFile(name: string): void {
    if (!name)
      return;
    this.newFile = new NodeModel();
    this.newFile.id = this.id ? this.id++ : 1;
    this.newFile.type = 'file';
    this.newFile.name = name;
    this.newFileAdded.emit(this.newFile);

  }
  cancel(): void {
    this.newFileAdded.emit(null);
  }
}
