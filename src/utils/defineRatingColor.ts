export const defineRatingColor = (rating: number) => {
  let color: string;

  if (rating >= 4) {
    color = "green";
  } else if (rating >= 3 && rating < 4) {
    color = "orange";
  } else {
    color = "red";
  }

  return color;
};
