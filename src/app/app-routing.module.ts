import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookList', pathMatch: 'full' },
  { path: 'bookList', component: BooklistComponent },
  { path: 'bookDetails', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
