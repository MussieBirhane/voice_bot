// Import the Vapi class from the package
import Vapi from "@vapi-ai/web";

// Create an instance of Vapi
const vapi = new Vapi("7388cbf1-3f35-45c5-abe6-f42a0abb12a9");

// Set up the microphone button click event
document.getElementById('microphone-btn').addEventListener('click', () => {
    // Start the VAPI session with the persistent assistant's ID
    console.log('Microphone button clicked');  // Test log
    vapi.start("9c246c0a-13c6-4b5b-8be2-151d9d64064e");

    // You can add event listeners if needed
    vapi.on('audioStart', () => console.log('Audio recording started'));
    vapi.on('audioEnd', () => console.log('Audio recording ended'));
    vapi.on('response', response => console.log('Assistant response:', response));
});
