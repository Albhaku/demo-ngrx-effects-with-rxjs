export interface Comment {
  id: number;
  body: string;
  postId: number;
}

export interface Post {
  id: number;
  title: string;
  comments?: Comment[];
}
