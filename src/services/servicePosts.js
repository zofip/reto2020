import { POST, GET, PUT, DELETE, SLASH } from "../util/constants";
import { HEADERS } from "../config/headers";

function countRequests(value) {
  let count = localStorage.getItem(value);
  if (count) {
    localStorage.setItem(value, Number.parseInt(count) + 1);
  } else {
    localStorage.setItem(value, 1);
  }
}

export function getPosts() {
  countRequests(GET);
  return fetch(process.env.REACT_APP_POSTS, {
    method: 'GET',
  });
}

export function addPost(post) {
  countRequests(POST);
  return fetch(process.env.REACT_APP_POSTS, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: HEADERS
  });
}

export function editPost(post) {
  countRequests(PUT);
  return fetch(process.env.REACT_APP_POSTS + SLASH + post.id, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: HEADERS
  });
}

export function deletePost(id) {
  countRequests(DELETE);
  return fetch(process.env.REACT_APP_POSTS + SLASH + id, {
    method: 'DELETE'
  });
}
