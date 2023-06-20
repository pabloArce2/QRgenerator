const qrcode = document.getElementById('qrcode');
const urlform = document.getElementById('urlform');

const QR = new QRCode(qrcode);

urlform.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(urlform.url.value);
});