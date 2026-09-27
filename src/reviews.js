/**
 * Populate only from the verified Parkway Fabrications Google Business Profile.
 * Never paraphrase or infer missing fields. The UI remains in an honest pending
 * state while this array is empty.
 */
export const reviews = [];

export function isPublishableReview(review) {
  return Boolean(
    review && review.rating === 5 && review.text?.trim() &&
    review.reviewerName?.trim() && /^https:\/\//.test(review.googleSourceUrl || '')
  );
}
