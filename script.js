function generateQRCode() {
  var link = document.getElementById("link").value;
  var qrCodeDiv = document.getElementById("qrcode");
  qrCodeDiv.innerHTML = "";

  var qrcode = new QRCode(qrCodeDiv, {
    text: link,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  setTimeout(() => {
    var imgElement = qrCodeDiv.getElementsByTagName("img")[0];
    if (imgElement) {
      var pngUrl = imgElement.src;
      var downloadLink = document.getElementById("downloadLink");
      downloadLink.style.display = "block";
      downloadLink.href = pngUrl;
    }
  }, 100);
}
