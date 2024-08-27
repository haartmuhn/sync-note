const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// Event handler for `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = event;
    // Update UI to notify the user they can install the PWA
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install!';
});

// Event handler for `butInstall` click
butInstall.addEventListener('click', async () => {
    if (!deferredPrompt) {
        // If the deferredPrompt is not set, exit
        return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Log the user's response to the prompt
    console.log(`User response to the install prompt: ${outcome}`);
    // Reset the deferredPrompt variable, since it can only be used once
    deferredPrompt = null;
    // Disable the install button
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// Event handler for `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('😇', 'appinstalled', event);
});
