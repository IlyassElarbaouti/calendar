const baseUrl = 'https://6173dd16110a740017223181.mockapi.io/events';

export const fetchEvents = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
    return response.json();
  });

export const createNewEvent = event =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't create event");
    }
    return response.json();
  });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });

export const createObjectForm = () => {
  const form = document.querySelector('.event-form');
  const userData = Object.fromEntries(new FormData(form));
  const { title, description, date, startTime, endTime } = userData;

  return {
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  };
};
