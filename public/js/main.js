// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners or functionality here
    
    // Example: Handling form submission using AJAX
    
    const form = document.getElementById('postForm');
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        try {
          const response = await fetch('/post', {
            method: 'POST',
            body: formData
          });
          
          if (response.ok) {
            // Post created successfully, redirect to dashboard or update UI as needed
            window.location.href = '/dashboard';
          } else {
            // Handle error
            console.error('Failed to create post');
          }
        } catch (error) {
          console.error('Error creating post:', error);
        }
      });
    }
  });