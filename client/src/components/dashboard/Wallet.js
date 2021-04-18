import React from 'react'

export default function Wallet(props) {

  return (
    <div className="card" style={{'height': '300px'}}>
      <div className="card-body justify-content-center">
        <h5 className="card-title">Wallet</h5>
        <div className="d-flex flex-column m-2">
          <p>When user clicks this button, it lets the wallet software know about our custom ERC20 tokens.</p>
          <button className="btn btn-primary m-2" onClick={props.addTokensToWallet} >Add AGO Tokens to Wallet</button>
          <h3 className="card-text">Balance: {props.balance} AGO Tokens</h3>
        </div>
      </div>
    </div>
  )
}
