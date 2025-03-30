import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: "", component: LoginComponent }, // Default route
    { path: "note", component: NoteComponent }, // Note route
    { path: "report", component: ReportComponent }, // Report route
];
