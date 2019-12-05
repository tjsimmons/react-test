const baseUrl = process.env.REACT_APP_USER_API_URL + "/squares";

export const getSquares = function() {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Bad network response");
    }
  });
};

export const updateSquare = function(square) {
  return fetch(baseUrl, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Bad network response");
    }
  });
};
