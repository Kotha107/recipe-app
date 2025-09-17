export function getStarArray(rating: number): string[] {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let starIndex= 1; starIndex<= 5; starIndex++) {
    if (starIndex<= roundedRating) {
      stars.push('star'); // Full star
    } else if (starIndex- 0.5 === roundedRating) {
      stars.push('star-half-outline'); // Half star
    } else {
      stars.push('star-outline'); // Empty star
    }
  }
  return stars;
}
