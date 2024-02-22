export const formatFoodName = (fileName: string): string => {
  const coreName = fileName.split(".")[0];
  return coreName.split("-").join(" ").replaceAll("_", " ");
};
