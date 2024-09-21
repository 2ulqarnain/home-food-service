export const getMenuData = async () => {
  const res = await fetch("/api/getMenu");
  return await res.json();
};
