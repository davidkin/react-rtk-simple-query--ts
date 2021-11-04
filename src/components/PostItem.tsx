import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void,
  update: (post: IPost) => void,
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || '';
    update({...post, title });
  };
  
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post)
  };
  
  return (
    <div className="post">
      {post.id}. {post.title}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;