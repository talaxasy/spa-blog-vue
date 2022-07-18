export default {
  name: 'intersection',
  mounted: (ref: any, binding: any) => {
    const bodyEnd = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) binding.value();
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    );
    bodyEnd.observe(ref);
  },
};
