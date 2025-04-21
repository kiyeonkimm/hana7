const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Fail to Fetch!!");

  await sleep(2000); // 💤 2초 동안 대기

  const data = await res.json();

  return data.name;
};

f().then(console.log).catch(console.error);
