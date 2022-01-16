type postType = {
  id: string;
  img: string;
  title: string;
  time: string;
  iframe: string;
  likes: number[];
  comments: number[];
};

type propsPostType = {
  posts: postType[];
};

import { Button } from '../../base/button';
import styles from './styles.module.css';

export const PostComponent = ({ posts }: propsPostType) => {
  function Posts() {
    return posts.map((post) => {
      return (
        <div key={post.id} className={styles.post}>
          <div className={styles.post__top}>
            <img className={styles.post__image} src={post.img} alt=""></img>
            <span className={styles.post__name}>{post.title}</span>
            <span className={styles.post__time}>{post.time}</span>
            <button className={styles.post__close}>X</button>
          </div>

          <div className={styles.post__content}>
            <img className={styles.post__iframe} src={post.iframe} alt="" />
          </div>

          <div className={styles.post__actions}>
            <Button>Like {post.likes.length}</Button>
            <Button>Comment {post.comments.length}</Button>
            <Button>Follow</Button>
          </div>
        </div>
      );
    });
  }

  return <div className={styles.container}>{Posts()}</div>;
};
