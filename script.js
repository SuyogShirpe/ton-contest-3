// --- 1. THE DATA ARRAYS ---
const dApps = [
    { name: "Tonkeeper", category: "Wallet", desc: "The premier non-custodial wallet for the TON ecosystem. It allows users to securely store, send, and receive Toncoin and jettons with a highly intuitive mobile interface.", role: "Primary gateway for users to interact with TON dApps and manage their digital assets securely.", link: "https://tonkeeper.com", img: "assets1/tonkeeper.png" },
    { name: "Telegram Wallet", category: "Wallet", desc: "A custodial crypto wallet integrated natively inside Telegram. It removes the friction of seed phrases, allowing anyone to send crypto as easily as sending a text message.", role: "Onboarding Web2 mainstream users into Web3 directly through their existing messaging app.", link: "https://wallet.tg", img: "assets1/t_wallet.jpeg" },
    { name: "STON.fi", category: "DEX", desc: "A Zero-Trust Cross-Chain DEX built on TON. It features an automated market maker (AMM) model that enables virtually zero-fee, instant token swaps without bridging.", role: "Providing deep liquidity and seamless token trading infrastructure for the ecosystem.", link: "https://ston.fi", img: "assets1/stonfi.jpeg" },
    { name: "DeDust", category: "DEX", desc: "An advanced, highly efficient decentralized exchange on TON. Designed with a focus on developer experience and user-centric UI, offering advanced portfolio management.", role: "Driving decentralized trading volume and supporting new token launches on the network.", link: "https://dedust.io", img: "assets1/dedust.png" },
    { name: "Getgems", category: "NFT Marketplace", desc: "The largest and most active NFT marketplace on the TON blockchain. It supports the minting, buying, selling, and auctioning of digital collectibles and Telegram usernames.", role: "The cultural and artistic hub of TON, driving digital ownership and creator economies.", link: "https://getgems.io", img: "assets1/getgames.png" },
    { name: "EVAA", category: "DeFi Lending", desc: "The first decentralized lending and borrowing protocol natively built on TON. Users can supply assets to earn interest or borrow against their crypto collateral.", role: "Unlocking capital efficiency by allowing users to leverage their assets without selling them.", link: "https://evaa.finance", img: "assets1/evaa.jpeg" },
    { name: "Tonstakers", category: "DeFi Staking", desc: "The leading liquid staking protocol on the TON blockchain. Users can stake their Toncoin to secure the network while receiving 'tsTON' to use in other DeFi apps.", role: "Maximizing network security while keeping user capital liquid and productive.", link: "https://tonstakers.com", img: "assets1/tonstakers.jpeg" },
    { name: "TonSwap", category: "DEX", desc: "One of the pioneering open-source decentralized exchanges for the TON ecosystem. Built to provide trustless and censorship-resistant token exchanges.", role: "Ensuring decentralized, community-driven trading infrastructure.", link: "https://tonswap.io", img: "assets1/tonswap.png" }
];

const tokens = [
    { name: "Notcoin", category: "GameFi / Meme", desc: "The viral Telegram game that started the tap-to-earn revolution. By simply tapping a coin on screen, it successfully onboarded tens of millions of users into Web3.", role: "Web3 onboarding gateway and massive community token.", link: "https://notco.in", img: "assets2/notcoin.png" },
    { name: "DOGS", category: "Community", desc: "A massive community token airdropped to Telegram users based entirely on their account age and activity level.", role: "Rewarding Telegram loyalty and building decentralized community engagement.", link: "https://t.me/dogs", img: "assets2/dogs.jpeg" },
    { name: "Blum", category: "Hybrid DEX", desc: "An innovative hybrid exchange built directly into Telegram, offering access to tokens across multiple blockchains through a gamified interface.", role: "Seamless cross-chain trading natively inside Telegram.", link: "https://blum.io", img: "assets2/blum.jpeg" },
    { name: "BUILD", category: "Ecosystem", desc: "A token dedicated to recognizing and incentivizing developers, creators, and active builders within the TON ecosystem.", role: "Fueling developer growth, hackathon initiatives, and network utility.", link: "https://t.me/community_bot", img: "assets2/build.webp" },
    { name: "Resistance Dog (REDO)", category: "Meme", desc: "Inspired by Pavel Durov's iconic hand-drawn dog, this token represents digital resistance, privacy, and freedom of speech.", role: "The unofficial cultural mascot and leading memecoin of the TON blockchain.", link: "https://redoton.com", img: "assets2/redo.webp" },
    { name: "Major", category: "GameFi", desc: "A competitive Telegram-based game where users complete ecosystem tasks and climb leaderboards to earn token rewards.", role: "Gamified engagement and driving active participation in the ecosystem.", link: "https://t.me/major", img: "assets2/major.png" },
    { name: "Povel Durev", category: "Meme", desc: "A satirical, intentionally misspelled tribute to Telegram's founder. It perfectly captures the chaotic and fun 'degen' culture of early TON.", role: "Pure community entertainment and internet meme culture.", link: "https://poveldurev.net", img: "assets2/durov.png" },
    { name: "TON FISH", category: "Meme", desc: "One of the earliest and most historic non-foundation social memecoins to launch on the TON blockchain.", role: "Paved the way for community-driven tokens and meme culture on the network.", link: "https://tonfish.io", img: "assets2/fish.png" }
];

const solarSystem = document.getElementById('solar-system');
const universe = document.getElementById('universe');

const initialRadius = 48; 
const radiusGap = 26;     
const baseSpeed = 10;     

function buildSolarSystem(dataArray) {
    // CRITICAL: Clear existing planets before drawing new ones 
    // (We only remove .orbit so we don't accidentally delete the Sun!)
    const existingOrbits = document.querySelectorAll('.orbit');
    existingOrbits.forEach(orbit => orbit.remove());

    dataArray.forEach((app, index) => {
        const orbitRadius = initialRadius + (index * radiusGap);
        const orbitSpeed = baseSpeed + (index * 6); 
        
        const randomOffset = -(Math.random() * orbitSpeed);

        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = `${orbitRadius * 2}px`;
        orbit.style.height = `${orbitRadius * 2}px`;
        orbit.style.transform = `translate(-50%, -50%)`; 
        orbit.style.animation = `spin ${orbitSpeed}s linear infinite`;
        orbit.style.animationDelay = `${randomOffset}s`; 

        const planet = document.createElement('div');
        planet.className = 'planet-container';
        planet.style.animation = `counter-spin ${orbitSpeed}s linear infinite`;
        planet.style.animationDelay = `${randomOffset}s`; 
        
        planet.onclick = (e) => {
            e.stopPropagation(); 
            openPanel(app.name, app.category, app.desc, app.role, app.link, app.img);
        };

        const img = document.createElement('img');
        img.src = app.img;

        planet.appendChild(img);
        orbit.appendChild(planet);
        solarSystem.appendChild(orbit);
    });
}

// --- 3. THE TOGGLE LOGIC ---
function switchView(viewType) {
    // Reset button styles
    document.getElementById('btn-dapps').classList.remove('active');
    document.getElementById('btn-tokens').classList.remove('active');

    if (viewType === 'dapps') {
        document.getElementById('btn-dapps').classList.add('active');
        buildSolarSystem(dApps);
    } else if (viewType === 'tokens') {
        document.getElementById('btn-tokens').classList.add('active');
        buildSolarSystem(tokens);
    }
}

// --- 4. UI INTERACTIONS ---
function openPanel(name, category, desc, role, link, imgSrc) {
    universe.classList.add('paused');
    document.getElementById('panel-title').textContent = name;
    document.getElementById('panel-category').textContent = category;
    document.getElementById('panel-desc').textContent = desc;
    document.getElementById('panel-role').textContent = role;
    document.getElementById('panel-link').href = link;
    document.getElementById('panel-logo').src = imgSrc;
    document.getElementById('info-overlay').classList.add('active');
    document.getElementById('info-panel').classList.add('active');
}

function closePanel() {
    document.getElementById('info-overlay').classList.remove('active');
    document.getElementById('info-panel').classList.remove('active');
    universe.classList.remove('paused');
}

// Build the default dApps view on load
window.onload = () => buildSolarSystem(dApps);