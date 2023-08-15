interface description1 {
  title: string;
  description: string[];
}

interface description2 {
  title: string;
  description?: string;
}

export const restructureDescription = (
  description: description1[] | undefined
): description2[] => {
  const restructuredDescription =
    description?.map((item) => {
      return {
        title: item.title,
        description: item.description.join("\n"),
      };
    }) || [];
  return restructuredDescription;
};
