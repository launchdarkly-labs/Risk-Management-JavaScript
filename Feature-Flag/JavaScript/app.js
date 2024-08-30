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

const style2000s = `
  body {
    background-color: #000000;
    font-family: "Arial", sans-serif;
    color: #00FF00;
    text-align: center;
    background-image: url('https://media.giphy.com/media/3o7aCTfyhYawdOXcFW/giphy.gif');
  }
  h1 {
    font-size: 36px;
    text-shadow: 0 0 10px #00FF00;
  }
  p {
    font-size: 16px;
  }
  #content {
    border: 3px solid #00FF00;
    border-radius: 15px;
    padding: 20px;
    margin: 20px;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const fanPageContent = `
  <h1>Welcome to DJ Toggle's Fan Page!</h1>
  <img src="https://placekitten.com/200/200" alt="DJ Toggle">
  <p>DJ Toggle is LaunchDarkly's favorite DJ, known for his sick beats and feature flag flipping skills!</p>
  <marquee>DJ Toggle - Flipping Flags and Dropping Beats!</marquee>
`;

const maintenanceContent = `
  <h1>We'll be right back!</h1>
  <p>DJ Toggle is currently fine-tuning his LaunchDarkly-powered turntables. Please check back later!</p>
`;

const ldClient = LDClient.initialize(process.env.LAUNCHDARKLY_CLIENT_SIDE_ID, {
  key: 'anonymous'
});

ldClient.on('ready', function() {
  const show2000sVersion = ldClient.variation('style-update', false);

  if (show2000sVersion) {
    content.innerHTML = fanPageContent;
    eraStyles.innerHTML = style2000s;
  } else {
    content.innerHTML = fanPageContent;
    eraStyles.innerHTML = style1995;
  }
});
