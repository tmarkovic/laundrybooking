const createReservation = async ({ date, apartmentId, timeslotId, roomId }) => {
  try {
    let response = await fetch(`/api/reservations`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ date, apartmentId, timeslotId, roomId }) // body data type must match "Content-Type" header
    });

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

export { createReservation };
