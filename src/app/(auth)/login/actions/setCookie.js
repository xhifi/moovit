"use server";

import { cookies } from "next/headers";

const setCookie = async (cookie) => {
  return cookies().set(cookie);
};

export default setCookie;
