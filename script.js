function toggleRSVP() {
    const rsvpCheckbox = document.getElementById('rsvp-input');
    const rsvpResponse = document.getElementById('rsvp-response');

    if (rsvpCheckbox.checked) {
        rsvpResponse.textContent = 'Great! We look forward to celebrating with you!';
    } else {
        rsvpResponse.textContent = 'We will miss you at the celebration.';
    }
}
