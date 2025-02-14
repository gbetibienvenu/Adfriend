function replaceAds() {
  const adSelectors = ["iframe", ".ad", ".adsbygoogle", ".advertisement"];

  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((ad) => {
      let widgetType = "quote"; // Default replacement type
      chrome.storage.local.get(["replacement"], function (result) {
        if (result.replacement) {
          widgetType = result.replacement;
        }
        ad.innerHTML = `<div class="adfriend-widget bg-gray-200 p-4 text-center rounded">
                            ${getReplacementContent(widgetType)}
                          </div>`;
        ad.style.background = "#f0f4f8";
        ad.style.padding = "10px";
        ad.style.textAlign = "center";
      });
    });
  });
}





function getReplacementContent(type) {
  const messages = {
    quote: [
      "🌟 Stay Positive! Believe in yourself! 🌟 / 🌟 Reste positif ! Crois en toi ! 🌟",
      "🚀 Keep pushing forward! You are capable of great things! / 🚀 Continue d'avancer ! Tu es capable de grandes choses !",
      "🌈 Every day is a new beginning! / 🌈 Chaque jour est un nouveau départ !"
    ],
    reminder: [
      "💪 Have you done your workout today? Stay active! / 💪 As-tu fait ton entraînement aujourd'hui ? Reste actif !",
      "🏃‍♂️ A little movement goes a long way! / 🏃‍♂️ Un peu de mouvement fait toute la différence !",
      "🧘‍♀️ Take a deep breath and stretch! / 🧘‍♀️ Respire profondément et étire-toi !"
    ],
    default: [
      "😊 Keep smiling, you're doing great! / 😊 Continue de sourire, tu fais du bon travail !",
      "🎯 Focus on your goals, success is near! / 🎯 Concentre-toi sur tes objectifs, le succès est proche !",
      "🌻 Be kind to yourself and others! / 🌻 Sois gentil avec toi-même et avec les autres !"
    ]
  };

  if (messages[type]) {
    return messages[type][Math.floor(Math.random() * messages[type].length)];
  } else {
    return messages.default[Math.floor(Math.random() * messages.default.length)];
  }
}
window.onload = replaceAds;





// function getReplacementContent(type) {
//   if (type === "quote") {
//     return "🌟 Stay Positive! Believe in yourself! 🌟";
//   } else if (type === "reminder") {
//     return "💪 Have you done your workout today? Stay active!";
//   } else {
//     return "😊 Keep smiling, you're doing great!";
//   }
// }


