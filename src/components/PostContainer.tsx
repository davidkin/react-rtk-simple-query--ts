import React, {FC} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer: FC = () => {
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(10);
  const [createPost, { error:  createError }] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  
  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost)
  };
  const handleRemove = (post: IPost): void => {
    deletePost(post);
  }
  
  const handleUpdate = (post: IPost): void => {
    updatePost(post);
  
  }
  
  return (
    <div>
      {/*<button onClick={() => refetch()}>Refetch</button>*/}
      <button onClick={handleCreate}>Add New Post</button>
  
      { isLoading && <h1>Идет загрузка</h1>}
      { error && <h1>Ошибка!</h1>}
      
      <div className="post__list">
        { posts && posts.map(item => (
          <PostItem
            key={item.id}
            post={item}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;