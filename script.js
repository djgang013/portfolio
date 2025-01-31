// Initialize Lucide icons
lucide.createIcons();

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', formData);
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
});