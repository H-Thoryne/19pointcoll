
/* Iterates through all 3 arrays' elements to update the value of amountCurrent */
export const updateAmount = () => {
  this.setState({
    low: this.state.low.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) })),
    mid: this.state.mid.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) })),
    high: this.state.high.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) }))
  })
}

const seededCountdown = (seed, startingAmount) => {
  const dateToday = new Date();
  const dateStart = Date.parse("2019-01-20T00:00:00");
  const dateEnd = Date.parse("2019-02-20T00:00:00");
  const daysTotal = Math.ceil((dateEnd - dateStart) / 86400000); /* 1000 * 3600 * 24 */
  const daysPassed = Math.floor((dateToday - dateStart) / 86400000); /* 1000 * 3600 * 24 */
  const daysRemaining = Math.ceil((dateEnd - dateToday) / 86400000); /* 1000 * 3600 * 24 */

  let actualAmount = startingAmount;

  let min = Math.round((startingAmount / daysTotal) - (startingAmount / 100));
  let max = Math.round((startingAmount / daysTotal) + (startingAmount / 100) + 1.5);
  /* console.log("###############################################"); */
  /* console.log(`seed: ${seed} min: ${min}; max: ${max}`); */
  /* console.log(`daysTotal: ${daysTotal}; daysPassed: ${daysPassed}; daysRemaining: ${daysRemaining}`) */

  const seededRandom = (min, max) => {
    seed = (seed * 9301 + 49297) % 233280;
    const rnd = seed / 233280;

    /* console.log(`min + rnd * (max - min) --- ${min} - ${rnd} * (${max} - ${min})`) */
    return min + rnd * (max - min);
  }

  if (daysPassed > daysTotal) {
    actualAmount = 0;
  } else {
    /* console.log(`starting: ${startingAmount}`) */
    for (let x = 0; x <= daysPassed; x++) {
      const result = Math.round(seededRandom(min, max) - 1);
      actualAmount -= result;

      if (actualAmount < 0) {
        actualAmount = 0;
        break;
      }
      /* console.log(`day: ${x}; rng: ${result}; stock: ${actualAmount}`) */
    }
  }

  if (actualAmount < 5 || daysRemaining < 3) {
    return "Utolsó darabok"
  }
  return actualAmount;
}