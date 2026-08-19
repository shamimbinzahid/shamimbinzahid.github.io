import Link from "next/link";
import siteContent from "../content.json";
import scribblesContent from "./content.json";
import { BackButton } from "../components/BackButton";
import { Footer } from "../components/Footer";
import { getReadTimeMinutes, getScribbleText } from "../components/scribbles";

export default function ScribblesHome() {
  return (
    <>
      <BackButton />

      <div>
        <h1 className="text-2xl font-bold text-color-main opacity-0 animate-fade-in delay-0100">
          {scribblesContent.title}
        </h1>
        <p className="text-font-main text-color-sub opacity-0 animate-fade-in delay-0200">
          {scribblesContent.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {scribblesContent.posts
          .filter((post) => post.show !== false)
          .map((post) => {
            const contentText = getScribbleText(post);
            const readTimeMinutes = getReadTimeMinutes(contentText);

            return (
              <Link
                key={post.slug}
                href={`/scribbles/${post.slug}`}
                className="p-0 opacity-0 animate-fade-in delay-0300 !no-underline hover:bg-blend-color"
              >
                <h2 className="text-color-link text-color-sub !font-bold !no-underline">
                  {post.title}
                </h2>
                <p className="text-color-sub opacity-60 line-clamp-2">
                  {contentText}
                </p>
                <p className="text-color-sub opacity-80 text-sm">
                  {post.lastEdited}
                </p>
              </Link>
            );
          })}
      </div>

    </>
  );
}
