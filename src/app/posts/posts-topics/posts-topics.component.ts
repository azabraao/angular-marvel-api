import { Component, OnInit } from "@angular/core";
import { PostsTopicsService } from "src/app/services/posts-topics.service";
import { interval } from "rxjs";

@Component({
  selector: "app-posts-topics",
  templateUrl: "./posts-topics.component.html",
  styleUrls: ["./posts-topics.component.scss"],
})
export class PostsTopicsComponent implements OnInit {
  public topics: any[] = [];

  constructor(private postsTopicsService: PostsTopicsService) {}

  ngOnInit() {
    let novoObservable = interval(5000);

    novoObservable.subscribe((times) => {
      this.loadTopics();
    });
  }
  loadTopics() {
    this.postsTopicsService.getList().subscribe(
      (successRes) => {
        this.topics = successRes.data;
      },
      (errorRes) => {
        console.log("successRes:", errorRes);
      }
    );
  }
}
