import styles from './styles.module.css';
import { DefaultTemplate } from '../../template/default';
import { PostComponent } from '../../widgets/posts';

const posts = [
  {
    id: '1',
    img: '/images/profile.png',
    title: 'Marvel Updates',
    time: 'publicado a 25 minutos',
    iframe: '/images/super.jpg',
    likes: [1],
    comments: [1, 2, 3, 4],
  },
  {
    id: '2',
    img: '/images/profile2.jpg',
    title: 'Cris',
    time: 'publicado a 1 hora',
    iframe: '/images/funny.jpg',
    likes: [],
    comments: [4],
  },
];

export function HomeComponent() {
  return (
    <div className={styles.container}>
      <DefaultTemplate>
        <article className={styles.container__article}>
          <PostComponent posts={posts} />
        </article>
      </DefaultTemplate>
    </div>
  );
}
