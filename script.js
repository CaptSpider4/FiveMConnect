function getIPAddressFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ip')?.trim();
}

const ipAddress = getIPAddressFromURL();
const statusTitle = document.getElementById('status-title');
const statusMessage = document.getElementById('status-message');
const ipButton = document.getElementById('ip-button');

if (!ipAddress) {
    statusTitle.textContent = 'IP Address Required';
    statusMessage.textContent = 'Enter a FiveM server IP to continue.';
    ipButton.hidden = false;
    ipButton.addEventListener('click', () => {
        const enteredIP = window.prompt('Enter the FiveM server IP address:', '127.0.0.1:30120')?.trim();

        if (!enteredIP) {
            return;
        }

        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set('ip', enteredIP);
        window.location.href = nextUrl.toString();
    });
} else {
    const redirectUrl = `fivem://connect/${ipAddress}?pure_1`;
    window.location.href = redirectUrl;
}
