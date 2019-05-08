const createReservation = ({date, apartmentId, timeSlotId, roomId}) => {
  console.log({date, apartmentId, timeSlotId, roomId});

  return fetch(`/api/reservations`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({date, apartmentId, timeSlotId, roomId}) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses JSON response into native Javascript objects
};

export {createReservation};
