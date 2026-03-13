const dApps = [
    { name: "Tonkeeper", category: "Wallet", desc: "The premier non-custodial wallet for the TON ecosystem. It allows users to securely store, send, and receive Toncoin and jettons with a highly intuitive mobile interface.", role: "Primary gateway for users to interact with TON dApps and manage their digital assets securely.", link: "https://tonkeeper.com", img: "assets1/tonkeeper.png" },
    { name: "Telegram Wallet", category: "Wallet", desc: "A custodial custodial crypto wallet integrated natively inside Telegram. It removes the friction of seed phrases, allowing anyone to send crypto as easily as sending a text message.", role: "Onboarding Web2 mainstream users into Web3 directly through their existing messaging app.", link: "https://wallet.tg", img: "assets1/t_wallet.jpeg" },
    { name: "STON.fi", category: "DEX", desc: "A Zero-Trust Cross-Chain DEX built on TON. It features an automated market maker (AMM) model that enables virtually zero-fee, instant token swaps without bridging.", role: "Providing deep liquidity and seamless token trading infrastructure for the ecosystem.", link: "https://ston.fi", img: "assets1/stonfi.jpeg" },
    { name: "DeDust", category: "DEX", desc: "An advanced, highly efficient decentralized exchange on TON. Designed with a focus on developer experience and user-centric UI, offering advanced portfolio management.", role: "Driving decentralized trading volume and supporting new token launches on the network.", link: "https://dedust.io", img: "assets1/dedust.png" },
    { name: "Getgems", category: "NFT Marketplace", desc: "The largest and most active NFT marketplace on the TON blockchain. It supports the minting, buying, selling, and auctioning of digital collectibles and Telegram usernames.", role: "The cultural and artistic hub of TON, driving digital ownership and creator economies.", link: "https://getgems.io", img: "assets1/getgames.png" },
    { name: "EVAA", category: "DeFi Lending", desc: "The first decentralized lending and borrowing protocol natively built on TON. Users can supply assets to earn interest or borrow against their crypto collateral.", role: "Unlocking capital efficiency by allowing users to leverage their assets without selling them.", link: "https://evaa.finance", img: "assets1/evaa.jpeg" },
    { name: "Tonstakers", category: "DeFi Staking", desc: "The leading liquid staking protocol on the TON blockchain. Users can stake their Toncoin to secure the network while receiving 'tsTON' to use in other DeFi apps.", role: "Maximizing network security while keeping user capital liquid and productive.", link: "https://tonstakers.com", img: "assets1/tonstakers.jpeg" },
    { name: "TonSwap", category: "DEX", desc: "One of the pioneering open-source decentralized exchanges for the TON ecosystem. Built to provide trustless and censorship-resistant token exchanges.", role: "Ensuring decentralized, community-driven trading infrastructure.", link: "https://tonswap.io", img: "assets1/tonswap.png" }
];

const solarSystem = document.getElementById('solar-system');
const universe = document.getElementById('universe');

// --- NEW MAXIMUM MOBILE MATH ---
// Pushed to 48px. This guarantees exactly 10px of empty space 
// between the edge of the Sun and the edge of the 1st planet.
const initialRadius = 48; 

// 26px gap > 24px planet size = NO OVERLAPPING!
// They will have exactly 2px of clearance when they pass each other.
const radiusGap = 26;     

const baseSpeed = 10;
function buildSolarSystem() {
    dApps.forEach((app, index) => {
        const orbitRadius = initialRadius + (index * radiusGap);
        const orbitSpeed = baseSpeed + (index * 6); 
        
        // Random starting position
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

window.onload = buildSolarSystem;