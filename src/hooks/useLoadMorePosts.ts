import type { Ref } from '@vue/reactivity';
import redaxios from 'redaxios';

type TPost = {
  id: number;
  title: string;
  description: string;
};

export default function loadMorePosts(
  page: Ref<number>,
  posts: Ref<TPost[]>,
  limit: number,
) {
  const fetching = async () => {
    page.value++;
    await redaxios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      .then(({ data, headers }) => {
        (data as any[]).forEach((post) => {
          posts.value.push({
            id: post.id,
            title: post.title,
            description: post.body,
          });
        });
      })
      .catch((e) => alert(e));
  };

  return { fetching };
}
