import moment from "moment";
import React from "react";
import ReviewItem from "./ReviewItem";

export default function ReviewItemList(props) {

  const { stationId, priceUpdates, reviews } = props;

  const stationReviews = props.reviews.filter(review => review.gas_station_id == stationId);
  console.log("station reviews", stationReviews);

  const sortedStationReviews = stationReviews.sort((a, b) => {
    if (moment(a.created_at).isAfter(moment(b.created_at))) {
      return -1;
    }
    return 1;
    // return moment(a.created_at).isAfter(moment(b.created_at));
  })

  const parsedReviewItem = sortedStationReviews.map(x =>
    <ReviewItem
      key={x.id}
      stationId={x.gas_station_id}
      comment={x.comment}
      rating={x.user_rating}
      userId={x.user_id}
      createdAt = {x.created_at}
    >
  </ReviewItem>
)

  return (
    <ul>
      {parsedReviewItem}
    </ul>
  );
}