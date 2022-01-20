export function getUserIdFromPriceUpdate(jsonData, stationId) {

  const findUpdate = jsonData.find(update => (update.gas_station_id === stationId));

  if (!jsonData || jsonData.length === 0 || !findUpdate) {
    return null;
  };

  return findUpdate.user_id;
}

export function getPriceUpdate(jsonData, stationId) {

  const findUpdate = jsonData.find(update => (update.gas_station_id === stationId));

  if (!jsonData || jsonData.length === 0 || !findUpdate) {
    return null;
  };

  return findUpdate;
}