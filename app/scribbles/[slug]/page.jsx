import { notFound } from "next/navigation";
import siteContent from "../../content.json";
import scribblesContent from "../content.json";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { renderTextWithLinks } from "../../components/utils";
import { getReadTimeMinutes, getScribbleText } from "../../components/scribbles";

export const dynamicParams = false;

export function generateStaticParams() {
  return scribblesContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

function renderTextBlock(text, links) {
  return renderTextWithLinks(text, links);
}

function renderContentBlock(block, index) {
  if (typeof block === "object" && block?.type === "image") {
    return (
      <figure key={index} className="opacity-0 animate-fade-in delay-0300">
        <img
          src={block.url}
          alt={block.alt || "Scribble illustration"}
          className="w-full rounded-md border border-color-sub/20"
          loading="lazy"
        />
        {block.caption ? (
          <figcaption className="mt-2 text-sm italic text-color-sub opacity-80">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (typeof block === "object" && block?.type === "list") {
    const ListTag = block.style === "ordered" ? "ol" : "ul";
    const listStyleClass = block.style === "ordered" ? "list-decimal" : "list-disc";

    return (
      <div key={index} className="space-y-2 opacity-0 animate-fade-in delay-0300">
        {block.title ? (
          <p className="font-semibold text-color-main leading-loose">
            {renderTextBlock(block.title, block.links || {})}
          </p>
        ) : null}

        <ListTag
          className={`${listStyleClass} list-inside flex flex-col gap-1 pl-5 text-color-sub leading-loose`}
        >
          {block.items.map((item, itemIndex) => {
            const itemText = typeof item === "string" ? item : item.text;
            const itemLinks = typeof item === "string" ? {} : item.links || {};

            return (
              <li key={`${index}-${itemIndex}`} className="mt-0">
                {renderTextBlock(itemText, itemLinks)}
              </li>
            );
          })}
        </ListTag>
      </div>
    );
  }

  const text = typeof block === "string" ? block : block.text;
  const links = typeof block === "string" ? {} : block.links || {};

  return (
    <p
      key={index}
      className="text-color-sub leading-loose opacity-0 animate-fade-in delay-0300"
    >
      {renderTextBlock(text, links)}
    </p>
  );
}

export default async function ScribbleDetails({ params }) {
  const { slug } = (await params) ?? {};
  const post = scribblesContent.posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const contentText = getScribbleText(post);
  const readTimeMinutes = getReadTimeMinutes(contentText);

  return (
    <>
      <BackButton href="/scribbles" label="Go back to all scribbles" />

      <div>
        <h1 className="text-2xl font-bold text-color-main opacity-0 animate-fade-in delay-0100">
          {post.title}
        </h1>
        <p className="text-font-main text-color-sub opacity-0 animate-fade-in delay-0200">
          Last edited {post.lastEdited} <span aria-hidden="true">&middot;</span>{" "}
          ~{readTimeMinutes} minute read
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {post.content.map((paragraph, index) => renderContentBlock(paragraph, index))}
      </div>
    </>
  );
}
