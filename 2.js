const emojiClick = (currentSpanObj, message) => {
    const value = currentSpanObj.innerHTML;

    let dynamicEl = document.createElement("div");
    dynamicEl.innerHTML = `${value} ${message}`;
    dynamicEl.style.fontSize = "xx-large";

    let parent = document.querySelector("#parent");
    parent.insertBefore(dynamicEl, parent.firstChild)
}