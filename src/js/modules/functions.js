export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp";
  }

  testWebP(function (support) {
    let className = "webp";
    // let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
