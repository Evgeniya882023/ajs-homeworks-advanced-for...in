export default function orderByProps(obj, [...sortArr]) {
  const objectKeys = [];
  const objectSorted = [];

  for (const key in obj) {
    if (sortArr.includes(key)) {
      objectKeys.push({ key, value: obj[key] });
    } else {
      objectSorted.push({ key, value: obj[key] });
    }
  }

  objectSorted.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  return [...objectKeys, ...objectSorted];
}
