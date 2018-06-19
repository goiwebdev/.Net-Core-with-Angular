import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
//import { HttpClientModule } from "@angular/common/http";

// ag-grid
import { AgGridModule } from "ag-grid-angular";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
