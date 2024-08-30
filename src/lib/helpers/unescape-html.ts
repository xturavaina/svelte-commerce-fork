import { JSDOM } from "jsdom";

export default function (htmlStr: string) {
  const jsdomObj = new JSDOM(htmlStr);
  return jsdomObj.serialize();
}
