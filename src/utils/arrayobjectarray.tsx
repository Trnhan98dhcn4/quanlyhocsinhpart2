const ArrayObjectArray = (data: {}[]) => {
  const result: {}[] = [];
  data.map((obj: any) => {
    const item: {}[] = [];
    for (let index in obj) {
      item.push(obj[index]);
    }
    result.push(item);
  });
  return result;
};

export default ArrayObjectArray;
