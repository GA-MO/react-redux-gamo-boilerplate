import fetch from 'isomorphic-fetch';
export const baseURL = 'http://localhost:8080';
export const headers = {
  WEB_METHOD_CHANNEL: 'WEBUI',
  E2E_REFID: '',
  'Content-Type': 'application/json',
};

export const fetchUser = (userName, passWord) => {
  const data = {
    user: userName,
    password: passWord,
  };

  return fetch(`${baseURL}/api/user-account/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      console.log(response);
      return response.json();
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .catch(error => { console.error('request failed', error); });
};
