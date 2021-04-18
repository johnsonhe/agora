import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function Dashboard(props) {
  const { user } = useAuth0();
  const [address, setAddress] = useState('');
  const web3 = props.web3;
  const agoToken = props.contracts.agoToken;
  const agorum = props.contracts.agorum;

  useEffect(() => {
    async function getAccount() {
      try {
        const address = await web3.eth.getAccounts();
        setAddress(address[0]);
      } catch(error) {
        console.error(error);
      }
    }

    getAccount();
  }, [web3]);

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

  const getTokenInfo = async () => {
    const symbol = await agoToken.methods.symbol().call();
    const decimals = await agoToken.methods.decimals().call();
    const address = agoToken.options.address;

    return { address, symbol, decimals };
  }

  /**
   * Add AGO tokens to wallet
   */
  const addTokensToWallet = async () => {
    const tokenInfo = await getTokenInfo();
    console.log(tokenInfo)
    
    try {
      const wasAdded = await web3.currentProvider.sendAsync({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenInfo.address,
            symbol: tokenInfo.symbol,
            decimals: tokenInfo.decimals,
            image: 'https://cdn.discordapp.com/attachments/830208037654102017/830632955684585492/unknown.png'
          }
        }
      });

      if (wasAdded) {
        console.log('AGO tokens added to wallet!');
      } else {
        console.log('AGO tokens not added to wallet');
      }
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <section className="home">
      <HomeNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col m-5">
            <p>Course content goes here. When user completes the intro course, they click this button, and are minted a fresh set of new tokens, which they can use to take actual courses!</p>
            <button className="btn btn-primary btn-lg m-3" onClick={handleFinish}>Finish Introductory Course</button>
            <button className="btn btn-primary" onClick={addTokensToWallet}>Add AGO Tokens to Wallet</button>
          </div>
        </div>
      </div>
    </section>
  );
}

  const HomeNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-color">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/proposals">Proposals</Link>
            <Link className="nav-link" to="/browse">Browse</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>
    );
  }

  export default Dashboard;