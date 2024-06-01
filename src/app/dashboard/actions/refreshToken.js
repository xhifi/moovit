import { cookies } from "next/headers";

const refreshToken = async () => {
  "use server";
  try {
    const req = await fetch("http://localhost:8080/auth/refresh", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${cookies().get("token")?.value}`,
      },
      credentials: "include",
    });

    const res = await req.json();
    console.log(res);
    cookies().set("authorization", res.accessToken, { maxAge: 60, path: "/", httpOnly: true });
    cookies().set("token", res.refreshToken, { maxAge: 60 * 60 * 24 * 30, path: "/", httpOnly: true });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default refreshToken;
