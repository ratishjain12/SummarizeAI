import { getStrapiURL } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface loginUserProps {
  identifier: string;
  password: string;
}

const base_url = getStrapiURL();

const config = {
  maxAge: 24 * 60 * 60 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL("/api/auth/local/register", base_url);

  try {
    const response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    cookies().set("jwt", response.jwt, config);

    redirect("/dashboard");
    return response.json();
  } catch (error) {
    console.error("register service error: ", error);
    throw error;
  }
}

export async function loginUserService(userData: loginUserProps) {
  const url = new URL("/api/auth/local", base_url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    return response.json();
  } catch (error) {
    console.error("login service error: ", error);
    throw error;
  }
}
