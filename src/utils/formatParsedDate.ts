function formatParsedDate(content: string): string {
  if (!content) {
    return "";
  }
  const dateRegex: RegExp = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const dates: string[] = content.match(dateRegex) || [];
  return dates.join(", ");
}

export default formatParsedDate;
