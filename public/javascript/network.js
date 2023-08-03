function getMyDetails() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/users/me",
  });
}

function logOut() {
  return $.ajax({
    method: "POST",
    url: "/users/logout",
  })
}

function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "/users/login",
    data
  });
}

function signUp(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
}


function getAllListings(params) {
  let url = "/api/items";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}

function getFavouritedItems() {
  let url = "/api/favourited";
  return $.ajax({
    url,
  });
}


const submitProperty = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/items",
    data,
  });
}