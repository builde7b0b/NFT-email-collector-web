function AppHeader(){

    return (

<header className="App-header">
        <h1>Welcome to NFT CollecTOR</h1>
        <p>The World's Most Powerful NFT Collection Management Tool</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400" alt="App Preview" style={{ borderRadius: '8px', marginBottom: '20px' }} />
          <p style={{ maxWidth: '400px', textAlign: 'center' }}>"Built for NFT collection owners and their communities to collect, manage, and engage from anywhere in the world. Collect verified emails, manage your email lists, and send targeted campaigns, all while integrating with the NFT marketplaces you already use."<br></br> Sign up, log in, and start managing your collection's community today!</p>
        </div>

        <div className="image-row">
  <img src={nftImage} alt="Feature 1" />
  <img src={blur} alt="Feature 2" />
  <img src={openSea} alt="Feature 3" />
</div>

        <div style={{ marginTop: '20px' }}>
        <Link className="App-link" to="/login" style={{ marginRight: '20px' }}>Login</Link>
            <Link className="App-link" to="/register" style={{ marginRight: '20px' }}>Sign Up</Link>
            <Link className="App-link" to="/dashboard">Dashboard</Link>
        </div>
      </header>
    );

}
