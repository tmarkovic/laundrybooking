const createReservation = async ({ date, timeslotId, roomId }) => {
  console.log(date, timeslotId, roomId);
  try {
    let response = await fetch(`/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ date, timeslotId, roomId }) // body data type must match "Content-Type" header
    });

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

const getReservations = async ({ startDate, endDate }) => {
  try {
    let response = await fetch(
      `/api/reservations?date_gte=${startDate}date_lte=${endDate}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

export { createReservation, getReservations };
