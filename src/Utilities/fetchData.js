export const fetchJson = async (fetchJSON) => {
  const res = await fetch(`/${fetchJSON}`);
  if (!res.ok) {
    throw new Response(`Failed to fetch ${fetchJSON}`, { status: res.status });
  }
  return res.json();
};
