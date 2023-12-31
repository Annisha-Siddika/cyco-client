export const getData = async () => {
  const response = await fetch(`http://localhost:5000/exgemple`);
  const result = await response.json();
  return result;
};

export const addToWatchList = async (Data) => {
  console.log(Data);
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/watchList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Data),
  });
  const result = await response.json();
  return result;
};
