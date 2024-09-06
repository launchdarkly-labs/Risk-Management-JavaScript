const content = document.getElementById('content');
const eraStyles = document.getElementById('era-styles');

const style1995 = `
  body {
    background-color: #008080;
    font-family: "Comic Sans MS", cursive;
    color: #FFFF00;
    text-align: center;
  }
  h1 {
    font-size: 48px;
    text-shadow: 2px 2px #FF00FF;
  }
  p {
    font-size: 18px;
  }
  #content {
    border: 5px dashed #FF00FF;
    padding: 20px;
    margin: 20px;
    background-color: #000080;
  }
`;

const fanPageContent = `
  <h1>Welcome to DJ Toggle's Fan Page!</h1>
  <img src="https://picsum.photos/200" alt="DJ Toggle">
  <p>DJ Toggle is LaunchDarkly's favorite DJ, known for his sick beats and feature flag-flipping skills!</p>
  <marquee>DJ Toggle - Flipping Flags and Dropping Beats!</marquee>
`;

const maintenanceContent = `
  <h1>We'll be right back!</h1>
  <p>DJ Toggle is currently fine-tuning his LaunchDarkly-powered turntables. Please check back later!</p>
`;

const errorButtonContent = `
  <button id="error-button">Click Here!!!</button>
  <div id="error-message" style="display: none; color: red; margin-top: 10px;"></div>
`;

const ldClient = LDClient.initialize(process.env.LAUNCHDARKLY_CLIENT_SIDE_ID, {
  key: 'anonymous'
});

ldClient.on('ready', function() {
  const show2000sVersion = ldClient.variation('style-update', false);
  const showErrorButton = ldClient.variation('kill-switch', false);

  if (show2000sVersion) {
    content.innerHTML = fanPageContent;
    eraStyles.innerHTML = style2000s;
  } else {
    content.innerHTML = fanPageContent;
    eraStyles.innerHTML = style1995;
  }

  if (showErrorButton) {
    content.innerHTML += errorButtonContent;
    const errorButton = document.getElementById('error-button');
    const errorMessage = document.getElementById('error-message');

    errorButton.addEventListener('click', () => {
      errorMessage.textContent = "💥🚨🐛AHHHH! AN ERROR!!!!!💥🚨🐛";
      errorMessage.style.display = 'block';
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);
    });
  }
});
