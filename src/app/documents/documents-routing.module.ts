import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { DocumentsGuard } from '@app/documents/guards';
import { AuthenticationGuard } from '@app/guards/authentication.guard';
import { DocumentBreakdownGuard } from '@app/documents/guards/document-breakdown.guard';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DocumentsComponent,
    canActivate: [
      DocumentsGuard,
      AuthenticationGuard
    ],
  },
  {
    path: ':documentId/breakdown',
    component: fromContainers.DocumentBreakdownComponent,
    canActivate: [
      DocumentBreakdownGuard,
    ]
  },
  {
    path: 'add',
    component: fromContainers.AddDocumentComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DocumentsRoutingModule {
}
