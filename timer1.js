const args = process.argv;
let time = args.slice(2);

for (let i = 0; i < time.length; i++) {
  if (time[i] <= 0 || isNaN(time[i])) {
    "";
  } else {
    setTimeout(() => {
      console.log(".");
    }, time[i] * 1000);
  }
}

