import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {ConfigService} from "../../config.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-pace-table',
  templateUrl: './pace-table.component.html',
  styleUrls: ['./pace-table.component.scss']
})
export class PaceTableComponent implements OnInit {
  @Input() columns!: any[];
  @Input() rows!: any[];

  @Input() loading!: boolean;

  @ViewChild('dt') table!: Table;

  @ViewChild('filter') filter!: ElementRef;
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
