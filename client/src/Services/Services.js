const URL = 'http://localhost:3001';

const addNewPlaces = async (place) => {
  const res = await fetch(URL + `/places`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(place),
  });
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};

const fetchAllPlaces = async () => {
  const res = await fetch(URL + `/places`);
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};

const postImage = async (formData) => {
  const res = await fetch(URL + `/images`, {
    method: 'POST',
    body: formData,
  });
  if (res.status < 400) return res.text();
  return Promise.reject(res);
};

export { addNewPlaces, fetchAllPlaces, postImage };
