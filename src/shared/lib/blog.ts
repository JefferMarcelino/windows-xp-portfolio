import matter from 'gray-matter'

interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
}

const posts = import.meta.glob<Record<string, string>>('../data/blog/*.md', {
  query: '?raw', 
  import: 'default',
  eager: true,
})

export const getAllPosts = (): Post[] => {  
  return Object.entries(posts).map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    const { data, content } = matter(rawContent);

    console.log(content);

    const meta = data as PostMeta;

    return {
      slug,
      content,
      ...meta,
    };
  }).filter(post => !post.draft);
};
