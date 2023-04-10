import { r as redirect } from './index-c8c7c629.js';

const handle = async ({ event, resolve }) => {
  const cookie = event.cookies.get("connect.sid");
  if (event.url.pathname === "/") {
    if (!cookie)
      throw redirect(307, "/login");
    const response = await resolve(event);
    return response;
  } else if (event.url.pathname === "/login") {
    if (cookie)
      throw redirect(307, "/");
    const response = await resolve(event);
    return response;
  }
  throw redirect(307, "/");
};

export { handle };
//# sourceMappingURL=hooks.server-a2abb3d4.js.map
