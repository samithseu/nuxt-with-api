export default defineEventHandler(async (event) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRouterParams(event).id}`
  );
  const data = await response.json();
  return data;
});
