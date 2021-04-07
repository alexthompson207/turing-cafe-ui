const baseURL = 'http://localhost:3001/api/v1/reservations';

const getAllReservations = () => {
  return fetch(`${baseURL}`)
    .then(response => response.json())
}

const postReservation = (newResy) => {
  return fetch(`${baseURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newResy)
  })
    .then(response => response.json())
}

const deleteReservation = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE'
  })
}


export { getAllReservations, postReservation, deleteReservation };