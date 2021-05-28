import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TabledataService } from '../tabledata.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

export interface Types {
  id: number,
  personid: number,
  firstname: string,
  lastname: string,
  dateofbirth: Number,
  birthfacility: string,
  otherdefectstext: boolean,
  diagcode: boolean,
  sourcedischargedata: boolean,
  sourcebirthcertificate: boolean,
  sourcecasereport: boolean,
  sourcedeathcertificate: boolean,
  nocase: boolean,
  abstractor: string,
  assigningdate: Number,
  Edit: string,
  Open: string,
}

// const ELEMENT_DATA: Types[] = [
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: true, diagcode: false, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: false, diagcode: false, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: false, diagcode: true, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: true, diagcode: false, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: true, diagcode: true, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
//   { id: 1, personid: 4132, firstname: '1.0079', lastname: 'H', dateofbirth: 1056427200000, birthfacility: 'H', otherdefectstext: false, diagcode: false, sourcedischargedata: true, sourcebirthcertificate: true, sourcecasereport: true, sourcedeathcertificate: false, nocase: true, abstractor: 'H', assigningdate: 1074229200000, Edit: 'H', Open: 'H' },
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: Types[] = [];
  displayedColumns: string[] = ['id', 'personid', 'firstname', 'lastname', 'dateofbirth', 'birthfacility', 'otherdefectstext', 'diagcode', 'sourcedischargedata', 'sourcebirthcertificate', 'sourcecasereport', 'sourcedeathcertificate', 'nocase', 'abstractor', 'assigningdate', 'Edit', 'Open'];
  dataSource = new MatTableDataSource<Types>(this.ELEMENT_DATA);
  ActualData: any[];
  rows: any;
  rowD: any[] = [];
  cols: string[] = [];
  constructor(public service: TabledataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    const demo = [{
      id: 1,
      personid: 4132,
      firstname: '1.0079',
      lastname: 'H',
      dateofbirth: 1056427200000,
      birthfacility: 'H',
      otherdefectstext: 'H',
      diagcode: 'H',
      sourcedischargedata: true,
      sourcebirthcertificate: true,
      sourcecasereport: true,
      sourcedeathcertificate: false,
      nocase: true,
      abstractor: 'H',
      assigningdate: 1074229200000,
      Edit: 'H',
      Open: 'H'
    }]

    this.service.getData().subscribe((data) => {
      this.ActualData = data.rowData
      this.cols = data.cols
      this.rows = this.ActualData.length
      console.log(this.rows)
      for (let i = 0; i < this.rows; i++) {
        let items = this.ActualData[i].length;
        console.log(items)
        for (let n = 0; n < 1;) {
          let data1 = [{
            id: this.ActualData[i][n++].value,
            personid: this.ActualData[i][n++].value,
            firstname: this.ActualData[i][n++].value,
            lastname: this.ActualData[i][n++].value,
            dateofbirth: this.ActualData[i][n++].value,
            birthfacility: this.ActualData[i][n++].value,
            otherdefectstext: this.ActualData[i][n++].value,
            diagcode: this.ActualData[i][n++].editable,
            sourcedischargedata: this.ActualData[i][n++].value,
            sourcebirthcertificate: this.ActualData[i][n++].value,
            sourcecasereport: this.ActualData[i][n++].value,
            sourcedeathcertificate: this.ActualData[i][n++].editable,
            nocase: this.ActualData[i][n++].editable,
            abstractor: this.ActualData[i][n++].value,
            assigningdate: this.ActualData[i][n++].value,
            Edit: this.ActualData[i][n++].action.actionType,
            Open: this.ActualData[i][n++].action.actionType
          }]
          // console.log(data1)
          this.rowD.push(...data1)
        }
      }
      console.log(this.rowD)
      this.dataSource.data = this.rowD as Types[];
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  clickedRows = new Set<Types>();

  public selectedRow: Types;

  onRowClicked(row) {
    // console.log(row)
    this.selectedRow = row;
    console.log(this.selectedRow)
  }

  openDialog1(): void {
    let dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: {
        id: this.selectedRow.id,
        personid: this.selectedRow.personid,
        firstname: this.selectedRow.firstname,
        lastname: this.selectedRow.lastname,
        dateofbirth: this.selectedRow.dateofbirth,
        birthfacility: this.selectedRow.birthfacility,
        otherdefectstext: this.selectedRow.otherdefectstext,
        diagcode: this.selectedRow.diagcode,
        sourcedischargedata: this.selectedRow.sourcedischargedata,
        sourcebirthcertificate: this.selectedRow.sourcebirthcertificate,
        sourcecasereport: this.selectedRow.sourcecasereport,
        sourcedeathcertificate: this.selectedRow.sourcedeathcertificate,
        nocase: this.selectedRow.nocase,
        abstractor: this.selectedRow.abstractor,
        assigningdate: this.selectedRow.assigningdate,
        Edit: this.selectedRow.Edit,
        Open: this.selectedRow.Open,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
