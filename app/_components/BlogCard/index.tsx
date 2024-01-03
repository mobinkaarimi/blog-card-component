import { cardItemType } from "@app/@types/cardItem";
import BlogCardItem from "./BlogCardItem";
import { blogCardList } from "@app/_constants";

export default function BlogCard() {

  function blogCard(_el: cardItemType): any {
    return (
      <div key={_el.id}>
        <BlogCardItem
          id={_el.id}
          title={_el.title}
          description={_el.description}
          category={_el.category}
          author={_el.author}
          createTime={_el.createTime}
          picture={_el.picture}
          authorAvatar={_el.authorAvatar}
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8">
    {blogCardList.map(blogCard)}
  </div>
  )
}