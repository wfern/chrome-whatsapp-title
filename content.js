let isObservingTitleChanges = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (!isObservingTitleChanges) {
    isObservingTitleChanges = true;
    handleWhatsAppTitle();
  }
});

function handleWhatsAppTitle() {
  document.addEventListener("click", function (e) {
    setWhatsAppTitle();
  });

  document.addEventListener("keypress", function (e) {
    setWhatsAppTitle();
  });

  setInterval(() => {
    const title = document.getElementsByTagName("title")[0].textContent;

    if (title.includes("WhatsApp")) {
      setWhatsAppTitle();
    }
  }, 5000);
}

function setWhatsAppTitle() {
  // let whatsAppActiveConversationTitle = document.querySelector(
  //   "#main > header > div._24-Ff > div > div > span"
  // );

  let whatsAppActiveConversationTitle =
    document.getElementById("contact-status");

  if (whatsAppActiveConversationTitle) {
    whatsAppActiveConversationTitle =
      whatsAppActiveConversationTitle.parentElement;
  }

  if (whatsAppActiveConversationTitle) {
    document.title = whatsAppActiveConversationTitle.textContent;
  } else {
    console.log("Elemento do nome do contato não encontrado!");
  }
}
