import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import { MessageService, ConfirmationService } from 'primeng/api'
import {ConfigService} from "../../config.service";

@Component({
  selector: 'app-view-pucks',
  templateUrl: './view-pucks.component.html',
  styleUrls: ['./view-pucks.component.scss', '../../../assets/demo/badges.scss'],
  styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class ViewPucksComponent implements OnInit {
  customers1!: any[];

  rowGroupMetadata: any;

  expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading:boolean = true;

  representatives: any[] = [];
  statuses: any[] = [];
  @ViewChild('dt') table!: Table;

  @ViewChild('filter') filter!: ElementRef;
  constructor(private config: ConfigService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.config.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
    this.representatives = [
      {name: 'Amy Elsner', image: 'amyelsner.png'},
      {name: 'Anna Fali', image: 'annafali.png'},
      {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
      {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
      {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
      {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
      {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
      {name: 'Onyama Limba', image: 'onyamalimba.png'},
      {name: 'Stephen Shaw', image: 'stephenshaw.png'},
      {name: 'XuXue Feng', image: 'xuxuefeng.png'}
    ];

    // @ts-ignore
    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
    ];
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
