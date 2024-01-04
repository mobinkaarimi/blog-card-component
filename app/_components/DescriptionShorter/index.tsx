// Type
import { DescriptionShorterType } from "@types/cardItem";

export default function DescriptionShorter({ text, maxLetter }: DescriptionShorterType)  {
  function checkLetterLong(paragraph: string,maxLetter: number) {
    let txt = "";
    if (paragraph.split(" ").length > maxLetter) {
      for (let textItem = 0; textItem < maxLetter; textItem++) {
        txt += ` ${paragraph.split(" ")[textItem]}`;
      }
      text += " ...";
    } else {
      txt = paragraph;
    }
    return txt;
  }
  let output = checkLetterLong(text,maxLetter);
  return <p className="text-gray-500">{output}</p>;
}