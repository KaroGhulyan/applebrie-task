export interface UserInterface {
  name: string;
  id: number;
  username: string;
  email: string;
  post: PostInterface | undefined;
}

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
