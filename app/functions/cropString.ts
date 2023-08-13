const crop = (input: string, limit: number) => {
  if (input.length <= limit) {
    return input;
  } else {
    let cropped = input.substring(0, limit);
    const lastSpaceIndex = cropped.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      cropped = cropped.substring(0, lastSpaceIndex);
    }
    return cropped + "...";
  }
};

export default crop;
