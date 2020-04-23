import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoSearchComponent } from "./photos/photo-search/photo-search.component";
import { PostsTopicsComponent } from "./posts/posts-topics/posts-topics.component";
import { NotFoundComponent } from "./error/not-found/not-found.component";
import { InsideLayoutComponent } from "./layout/inside-layout/inside-layout.component";

const routes: Routes = [
  {
    path: "",
    component: InsideLayoutComponent,
    children: [
      { path: "photos", component: PhotoListComponent },
      { path: "topics", component: PostsTopicsComponent },
      { path: "photos/search", component: PhotoSearchComponent },
      { path: "", redirectTo: "photos", pathMatch: "full" },
      { path: "**", component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
