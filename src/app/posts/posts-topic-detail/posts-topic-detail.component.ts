import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsTopicsService } from "src/app/services/posts-topics.service";

@Component({
  selector: "app-posts-topic-detail",
  templateUrl: "./posts-topic-detail.component.html",
  styleUrls: ["./posts-topic-detail.component.scss"],
})
export class PostsTopicDetailComponent implements OnInit {
  public topic: any;

  constructor(
    private route: ActivatedRoute,
    private postsTopicsService: PostsTopicsService
  ) {}

  ngOnInit() {
    // Jogue o valor do parâmetro para dentro da variável
    let topicId = this.route.snapshot.params.topicId;
    console.log("topicId", topicId);
    // Chame a função loadData
    this.loadData(topicId);
  }

  async loadData(topicId) {
    try {
      let res = await this.postsTopicsService.getById(topicId);
      this.topic = res.data;
      console.log("this.topic", res);
    } catch (error) {
      console.log("Erro ao recuperar os dados do tópico:", error);
    }
  }
}
