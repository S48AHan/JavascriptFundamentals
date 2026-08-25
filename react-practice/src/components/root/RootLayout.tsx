// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Link, Outlet } from "@tanstack/react-router";

export const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/useRef" className="[&.active]:font-bold">
        useRef
      </Link>
       <Link to="/userList" className="[&.active]:font-bold">
        userList
      </Link>
    </div>
    <hr />
    <main>
      <Outlet />
    </main>
    {/* <TanStackRouterDevtools /> */}
  </>
);
