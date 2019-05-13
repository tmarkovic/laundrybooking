const createReservation = async ({ date, timeslotId, roomId, userId }) => {
  let token = localStorage.getItem("accessToken");

  try {
    let response = await fetch(`/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ date, timeslotId, roomId, userId }) // body data type must match "Content-Type" header
    });

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

const getReservations = async ({ startDate, endDate, userId }) => {
  let token = localStorage.getItem("accessToken");
  try {
    let response = await fetch(
      `/api/reservations?date_gte=${startDate}date_lte=${endDate}${
        userId ? "&userId=" + userId : ""
      }`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    let data = await response.json();

    return data;
  } catch {
    return null;
  }
};

const deleteReservation = async reservationId => {
  try {
    let token = localStorage.getItem("accessToken");
    let response = await fetch(`/api/reservations/${reservationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export { createReservation, getReservations, deleteReservation };
