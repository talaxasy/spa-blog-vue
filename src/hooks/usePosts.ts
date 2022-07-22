import redaxios from 'redaxios';
import { onMounted, reactive, ref, watch } from 'vue';

type TPost = {
  id: number;
  title: string;
  description: string;
};

export default function usePosts(limit: number) {
  const state = reactive<{
    posts: TPost[];
    loading: boolean;
    totalPages: number;
    page: number;
  }>({
    posts: [],
    loading: true,
    totalPages: 0,
    page: 1,
  });

  const fetching = () =>
    redaxios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: state.page,
          _limit: limit,
        },
      })
      .then(({ data, headers }) => {
        state.posts = (data as any[]).map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
        }));
        state.totalPages = Math.ceil(+headers.get('X-Total-Count')! / limit);
        state.loading = false;
      })
      .catch((e) => alert(e));

  watch(
    () => state.page,
    () => fetching(),
  );

  onMounted(fetching);

  return {
    posts: state.posts,
    loading: state.loading,
    totalPages: state.totalPages,
    page: state.page,
  };
}
