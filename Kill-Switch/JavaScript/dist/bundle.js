(()=>{const n=document.getElementById("content"),e=document.getElementById("era-styles"),o='\n  <h1>Welcome to DJ Toggle\'s Fan Page!</h1>\n  <img src="https://placekitten.com/200/200" alt="DJ Toggle">\n  <p>DJ Toggle is LaunchDarkly\'s favorite DJ, known for his sick beats and feature flag flipping skills!</p>\n  <marquee>DJ Toggle - Flipping Flags and Dropping Beats!</marquee>\n',i=LDClient.initialize("66cf7a5e7878f610416f7c73",{key:"anonymous"});i.on("ready",(function(){i.variation("kill-switch",!1)?(n.innerHTML=o,e.innerHTML="\n  body {\n    background-color: #000000;\n    font-family: \"Arial\", sans-serif;\n    color: #00FF00;\n    text-align: center;\n    background-image: url('https://media.giphy.com/media/3o7aCTfyhYawdOXcFW/giphy.gif');\n  }\n  h1 {\n    font-size: 36px;\n    text-shadow: 0 0 10px #00FF00;\n  }\n  p {\n    font-size: 16px;\n  }\n  #content {\n    border: 3px solid #00FF00;\n    border-radius: 15px;\n    padding: 20px;\n    margin: 20px;\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n"):(n.innerHTML=o,e.innerHTML='\n  body {\n    background-color: #008080;\n    font-family: "Comic Sans MS", cursive;\n    color: #FFFF00;\n    text-align: center;\n  }\n  h1 {\n    font-size: 48px;\n    text-shadow: 2px 2px #FF00FF;\n  }\n  p {\n    font-size: 18px;\n  }\n  #content {\n    border: 5px dashed #FF00FF;\n    padding: 20px;\n    margin: 20px;\n    background-color: #000080;\n  }\n')}))})();