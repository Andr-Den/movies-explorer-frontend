export const BASE_URL = 'http://localhost:3000';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
   })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
   })
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const editUser = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({name, email})
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const getSavedFilms = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const saveMovie = (data, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({
      country: String(data.country),
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image.url,
      trailerLink: data.trailerLink,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: data.image.url,
      movieId: data.id,
    }
    )
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const deleteMovie = (data, token) => {
  return fetch(`${BASE_URL}/movies/` + data._id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}