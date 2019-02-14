/* Iterates through all 3 arrays' elements to update the value of amountCurrent */
export const updateAmount = () => {
  this.setState({
    low: this.state.low.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) })),
    mid: this.state.mid.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) })),
    high: this.state.high.map(item => ({ ...item, amountCurrent: seededCountdown(item.ln, item.amountAll) }))
  })
}