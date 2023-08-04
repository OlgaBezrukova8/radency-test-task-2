import { NoteProps, SummaryProps } from "../types";

// We need to have separated props to store category - counters for optimization purposes to access the corresponding counters by key -> acc[category],
const createSummary = (notes: NoteProps[]): SummaryProps => {
  const summary: SummaryProps = notes.reduce((acc: SummaryProps, note) => {
    const { category } = note;
    const isArchived = note.archived === true;

    if (!acc[category]) {
      acc[category] = {
        activeCount: 0,
        archivedCount: 0,
      };
    }

    if (isArchived) {
      acc[category].archivedCount++;
    } else {
      acc[category].activeCount++;
    }

    return acc;
  }, {});
  return summary;
};

export default createSummary;
