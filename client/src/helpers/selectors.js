import moment from "moment";

export function getUserIdFromPriceUpdate(jsonData, stationId) {

  const recentUpdate = getMostRecentPriceUpdate(jsonData, stationId);

  return recentUpdate.user_id
}

export function getPriceUpdate(jsonData, stationId) {

  const findUpdate = jsonData.find(update => (update.gas_station_id === stationId));

  if (!jsonData || jsonData.length === 0 || !findUpdate) {
    return null;
  };

  return findUpdate;
}

export function getMostRecentPriceUpdate(jsonData, stationId) {

  const allUpdates = jsonData.filter(update => (update.gas_station_id === stationId));

  if (!jsonData || jsonData.length === 0 || !allUpdates) {
    return null;
  };

  const recentUpdate = allUpdates.pop()


  return recentUpdate;
}