import { PostCard } from "../../assets/styles/shared/";
import useTransformData from "../../hooks/useTransformData";
import { PostsWrapper } from "../../assets/styles/shared/";

const PostsList = () => {
  const { posts } = useTransformData();

  return (
    <PostsWrapper>
      {posts.map((post) => (
        <div className="site-card-border-less-wrapper">
          <PostCard title={post.title}>
            <p>{post.body}</p>
          </PostCard>
        </div>
      ))}
    </PostsWrapper>
  );
};

export default PostsList;
