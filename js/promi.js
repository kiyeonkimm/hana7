class Promise {
  constructor(nbfn) {
    nbfn(this.runSuccess.bind(this), this.runFail.bind(this));
  }

  runSuccess(ret) {
    this.thenFn(ret);
  }

  runFail(err) {
    this.catchFn(err);
  }

  then(f) {
    console.log("then>>", f);
    this.thenFn = f;
    return this;
  }

  catch(errFn) {
    this.catchFn = errFn;
  }
}

const promi = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay, "done!");
    // setTimeout(reject, delay, 'error!');
  });

// promi(1000, console.log);
// promi(1000).then(res => console.log(res));
promi(1000)
  .then(console.log)
  .catch((err) => console.log("Error!!", err));

console.log("half time!!");

(async function () {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log("************");
})();

console.log("The end");

//-------------------
const promii = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

console.log(promii);

promi.then(
  (succ) => console.log("Resolve!", succ, promiii),
  (err) => console.log("Reject!", err, promi)
);
