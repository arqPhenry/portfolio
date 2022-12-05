const importImages = async (imagePaths) => {
  const images = await Promise.all(imagePaths.map(path => import(path)))

  return images
}

export { importImages }
