import React from 'react'

export default function IntroCourse(props) {
  const agoToken = props.contracts.agoToken;
  const address = props.address;

  /**
 * calls mint token function on AGOToken smart contract
 */
    const handleFinish = () => {
    agoToken.methods.mintTokensOnIntroCourseCompletion().send({from: address})
      .on('receipt', receipt => {
        const transferEvent = receipt.events.Transfer
        const tokenValue = transferEvent.returnValues.value;
        console.log(tokenValue)
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={handleFinish}>Finish Introductory Course</button>
    </div>
  )
}
