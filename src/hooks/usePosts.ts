import redaxios from 'redaxios';
import { onMounted, reactive, ref, watch } from 'vue';

type TPost = {
  id: number;
  title: string;
  description: string;
};

export default function usePosts(limit: number) {
  const posts = ref<TPost[]>([]);
  const loading = ref(true);
  const totalPages = ref(0);
  const page = ref(1);

  const fetching = async () =>
    await redaxios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page.value,
          _limit: limit,
        },
      })
      .then(({ data, headers }) => {
        posts.value = (data as any[]).map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
        }));
        totalPages.value = Math.ceil(+headers.get('X-Total-Count')! / limit);
      })
      .catch((e) => alert(e));
  loading.value = false;

  onMounted(fetching);

  return {
    posts,
    loading,
    totalPages,
    page,
    fetching,
  };
}
