import { getAllPosts } from "@/shared/lib/blog";
import { Article } from "@/widgets/Article";
import { DesktopBottomBar } from "@/widgets/DesktopBottomBar"
import { Folder } from "@/widgets/Folder"

export const DesktopPage = () => {
  const posts = getAllPosts();

  return (
    <div className="h-screen w-screen bg-[url('/images/xp-landscape.jpeg')] bg-no-repeat bg-cover">
      <div className="p-4 w-full h-full flex flex-col items-start">
        <Folder id="MY_ARTICLES" title="My Articles">
          {
            posts.map((post) => (
              <Article
                key={post.slug}
                id={post.slug}
                title={post.title}
                content={post.content}
              />
            ))
          }
        </Folder>
      </div>

      <DesktopBottomBar />
    </div>
  )
}