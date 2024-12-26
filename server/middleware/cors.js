export default defineEventHandler((event) => {
  // Add CORS headers
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Handle preflight requests (OPTIONS)
  if (event.method === "OPTIONS") {
    setResponseStatus(event, 204);
    return "";
  }
});
