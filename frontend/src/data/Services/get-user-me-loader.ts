import { getAuthToken } from "./get-token";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

const query = qs.stringify({
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
});

export async function getUserMeLoader() {
  const baseUrl = getStrapiURL();
  const url = new URL("/api/users/me", baseUrl);
  url.search = query;

  const authToken = await getAuthToken();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      cache: "no-cache",
    });

    const data = await response.json();
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    return { ok: false, data: null, error: null };
  }
}
