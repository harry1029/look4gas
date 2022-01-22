export function calculateRating(gasStation, reviews) {

  const findReviews = reviews.filter(x => (x.gas_station_id == gasStation.id));

  //console.log("FIND REVIEWS: ", findReviews)

  if (!reviews || reviews.length === 0 || !findReviews || findReviews.length === 0) {
    return 0;
  };

  let sum = 0;
  for (let i = 0; i < findReviews.length; i++) {
    sum += parseFloat(findReviews[i].user_rating);
    console.log("SUM = ", sum)
  }

  const average = (sum / findReviews.length).toFixed(2);

  //console.log("AVERAGE RATING IS: ", average)
  return average;
}