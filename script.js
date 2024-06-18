// Import the Vapi class from the package
import Vapi from "@vapi-ai/web";

// Create an instance of Vapi
const vapi = new Vapi(process.env.VAPI_PUBLIC_KEY);

// Set up the microphone button click event
document.getElementById('microphone-btn').addEventListener('click', () => {
    // Start the VAPI session with the persistent assistant's ID
    console.log('Microphone button clicked');  // Test log
    vapi.start(process.env.VAPI_ASSISTANT_ID);   // 78a85399-9fcb-4dd3-8007-633a7f26da6d Cargo Trans

    // New lines
    document.getElementById('microphone-btn').style.display = 'none';
    document.getElementById('hangup-btn').style.display = 'inline';
});

document.getElementById('hangup-btn').addEventListener('click', () => {
    console.log('Hangup button clicked');
    vapi.stop();

    document.getElementById('microphone-btn').style.display = 'inline';
    document.getElementById('hangup-btn').style.display = 'none';
});

// You can add event listeners if needed
vapi.on('audioStart', () => console.log('Audio recording started'));
vapi.on('audioEnd', () => console.log('Audio recording ended'));
vapi.on('response', response => console.log('Assistant response:', response));
