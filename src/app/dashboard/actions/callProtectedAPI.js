import { cookies } from "next/headers";

const callProtectedAPI = async () => {
  "use server";
  const cookie = cookies();
  try {
    const authorization = cookie.get("authorization")?.value;
    //   const token = cookies().get("token").value;
    //   const authorization = cookies().get("authorization")?.value;
    const req = await fetch("http://localhost:8080/protected", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Cookie: `authorization=${authorization}`,
      },
      credentials: "include",
    });
    const res = await req.text();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default callProtectedAPI;
