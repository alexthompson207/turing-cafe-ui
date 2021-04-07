const baseURL = 'http://localhost:3001/api/v1/reservations';

const getAllReservations = () => {
  return fetch(`${baseURL}`)
    .then(response => response.json())
}



export { getAllReservations };