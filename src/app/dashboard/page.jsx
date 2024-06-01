import parseClientCookies from "../utils/parseClientCookies";
import callProtectedAPI from "./actions/callProtectedAPI";
import refreshToken from "./actions/refreshToken";
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <form action={callProtectedAPI}>
        <button type="submit">call API Server</button>
      </form>
      <form action={refreshToken}>
        <button type="submit">Refresh access token</button>
      </form>
    </div>
  );
};

export default page;
