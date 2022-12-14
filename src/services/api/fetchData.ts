import wrapPromise from "./wrapPromise";

function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => res);

  return wrapPromise(promise);
}

export default fetchData;
