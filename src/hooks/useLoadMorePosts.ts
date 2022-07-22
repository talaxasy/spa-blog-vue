import redaxios from 'redaxios';
import { onMounted, reactive, ref, watch } from 'vue';

type TPost = {
  id: number;
  title: string;
  description: string;
};

export default function loadMorePosts(
  page: number,
  posts: TPost[],
  totalPages: number,
  limit: number,
) {
  const fetching = async () => {
    page++;
    await redaxios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page,
          _limit: 10,
        },
      })
      .then(({ data, headers }) => {
        (data as any[]).forEach((post) => {
          posts.push({
            id: post.id,
            title: post.title,
            description: post.body,
          });
        });
        totalPages = Math.ceil(+headers.get('X-Total-Count')! / limit);
      })
      .catch((e) => alert(e));
  };

  return { fetching };
}
