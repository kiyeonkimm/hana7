function f() {
  try {
    throw new Error("오류났어요!");
  } catch (err) {
    console.error(err);
  } finally {
    console.log("finally!");
  }
}

const promiseThrow = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        throw new Error("오류났어요!");
      }, 1000);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("finally!");
    }
  });

promiseThrow()
  .then(console.log)
  .catch((err) => console.log("PromiseCatch:", err));

const asyncThrow = async () => {
  try {
    setTimeout(() => {
      throw new Error("오류 또 났어요!");
    }, 1000);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("finally!");
  }
};

asyncThrow();
