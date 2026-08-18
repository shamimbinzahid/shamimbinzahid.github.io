export const READING_CHARS_PER_MINUTE = 800;

export const getScribbleText = (post) => {
  if (!post?.content || post.content.length === 0) {
    return "";
  }

  return post.content
    .map((paragraph) => {
      if (typeof paragraph === "string") {
        return paragraph;
      }

      return paragraph?.text ?? "";
    })
    .filter(Boolean)
    .join("\n\n");
};

export const getReadTimeMinutes = (text) => {
  const safeText = text ?? "";
  return Math.max(1, Math.ceil(safeText.length / READING_CHARS_PER_MINUTE));
};
