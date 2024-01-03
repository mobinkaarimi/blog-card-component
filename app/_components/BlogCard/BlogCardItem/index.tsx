
import Image from "next/image";
import { cardItemType } from "@types/cardItem";
import DescriptionShorter from "@components/DescriptionShorter";
export default function BlogCardItem(props: cardItemType) {
  const {title, description, category, author, createTime, picture, authorAvatar, id} = props;
  console.log(picture)
  return (
    <div className="rounded-xl relative overflow-hidden bg-white"
    >
      <Image
        alt={title}
        src={picture}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="flex flex-col space-x-1 px-4 py-4 flex-nowrap gap-y-3 my-2">
        <div>
          <h2 className="text-sm font-normal text-white bg-orange-500 inline py-1 px-3 rounded-xl">{category}</h2>
        </div>
        <h2 className="text-xl font-medium">{title}</h2>
        <DescriptionShorter text={description} maxLetter={55} />
        <div className="flex flex-row space-x-2 pt-2">
          <Image
            src={authorAvatar}
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            alt={authorAvatar}
          />
          <div className="flex flex-col">
            <p>{author}</p>
            <p>{createTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
