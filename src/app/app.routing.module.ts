import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoSearchComponent } from "./photos/photo-search/photo-search.component";

const routes: Routes = [
  { path: "photos", component: PhotoListComponent },
  { path: "photos/search", component: PhotoSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
