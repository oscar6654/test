let ready = () => {
  // your code, here
  return new Promise((resolve,reject) =>
  {
    document.onreadystatechange = () => {
      if (document.readyState === "complete")
      resolve();
    }
  });
}
