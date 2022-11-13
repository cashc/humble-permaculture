function addExpandEvents() {
  const expandableDivs = Array.from(document.getElementsByClassName("expand"));

  expandableDivs.forEach((expandDiv) => {
    const button = expandDiv.firstElementChild;
    const content = expandDiv.lastElementChild;
    button.onclick = () => {
      if (button.classList.contains("open")) {
        button.classList.remove("open");
        content.style.maxHeight = 0;
      } else {
        button.classList.add("open");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    };
  });
}

addExpandEvents();
