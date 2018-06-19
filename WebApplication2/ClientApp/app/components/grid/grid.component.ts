import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "my-app",
    template: `<div style="height: 100%; padding-top: 30px; box-sizing: border-box;">
<ag-grid-angular
    #agGrid
    style="width: 100%; height: 100%;"
    id="myGrid"
    class="ag-theme-balham"
    [columnDefs]="columnDefs"
    [rowData]="rowData"
    [enableColResize]="true"
    [pinnedTopRowData]="pinnedTopRowData"
    [pinnedBottomRowData]="pinnedBottomRowData"
    [defaultColDef]="defaultColDef"
    (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
</div>

<div style="position: absolute; top: 0; left: 0;">
    <div style="padding: 2px;">
        <button (click)="onBtStartEditing()">edit (0)</button>
        <button (click)="onBtStartEditing(46)">edit (0, Delete)</button>
        <button (click)="onBtStartEditing(null, 'T')">edit (0, 'T')</button>
        <button (click)="onBtStartEditing(null, null, 'top')">edit (0, Top)</button>
        <button (click)="onBtStartEditing(null, null, 'bottom')">edit (0, Bottom)</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button (click)="onBtStopEditing()">stop ()</button>
        <button (click)="onBtNextCell()">next ()</button>
        <button (click)="onBtPreviousCell()">previous ()</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button (click)="onBtWhich()">which ()</button>
    </div>
</div>
`
})
export class GridComponent {
    private gridApi;
    private gridColumnApi;

    private columnDefs;
    private rowData;
    private pinnedTopRowData;
    private pinnedBottomRowData;
    private defaultColDef;

    constructor() {
        this.columnDefs = [
            {
                field: "firstName",
                width: 100
            },
            {
                field: "lastName",
                width: 100
            },
            {
                field: "gender",
                width: 90
            },
            {
                field: "age",
                width: 70
            },
            {
                field: "mood",
                width: 70
            },
            {
                field: "country",
                width: 100
            },
            {
                field: "address",
                width: 200
            }
        ];
        this.rowData = [
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Bob",
                lastName: "Harrison",
                gender: "Male",
                address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Mary",
                lastName: "Wilson",
                gender: "Female",
                age: 11,
                address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
                mood: "Sad",
                country: "Ireland"
            },
            {
                firstName: "Sadiq",
                lastName: "Khan",
                gender: "Male",
                age: 12,
                address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
                mood: "Happy",
                country: "Ireland"
            },
            {
                firstName: "Jerry",
                lastName: "Mane",
                gender: "Male",
                age: 12,
                address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
                mood: "Happy",
                country: "Ireland"
            }
        ];
        this.pinnedTopRowData = getPinnedTopData();
        this.pinnedBottomRowData = getPinnedBottomData();
        this.defaultColDef = { editable: true };
    }

    onBtStopEditing() {
        this.gridApi.stopEditing();
    }

    onBtStartEditing(key, char, pinned) {
        this.gridApi.setFocusedCell(0, "lastLame", pinned);
        this.gridApi.startEditingCell({
            rowIndex: 0,
            colKey: "lastName",
            rowPinned: pinned,
            keyPress: key,
            charPress: char
        });
    }

    onBtNextCell() {
        this.gridApi.tabToNextCell();
    }

    onBtPreviousCell() {
        this.gridApi.tabToPreviousCell();
    }

    onBtWhich() {
        let cellDefs = this.gridApi.getEditingCells();
        if (cellDefs.length > 0) {
            var cellDef = cellDefs[0];
            console.log(
                "editing cell is: row = " +
                cellDef.rowIndex +
                ", col = " +
                cellDef.column.getId() +
                ", floating = " +
                cellDef.floating
            );
        } else {
            console.log("no cells are editing");
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
    }
}

function getPinnedTopData() {
    return [
        {
            firstName: "##",
            lastName: "##",
            gender: "##",
            address: "##",
            mood: "##",
            country: "##"
        }
    ];
}
function getPinnedBottomData() {
    return [
        {
            firstName: "##",
            lastName: "##",
            gender: "##",
            address: "##",
            mood: "##",
            country: "##"
        }
    ];
}
function getCharCodeFromEvent(event) {
    event = event || window.event;
    return typeof event.which === "undefined" ? event.keyCode : event.which;
}
function isCharNumeric(charStr) {
    return !!/\d/.test(charStr);
}
function isKeyPressedNumeric(event) {
    var charCode = getCharCodeFromEvent(event);
    var charStr = String.fromCharCode(charCode);
    return isCharNumeric(charStr);
}