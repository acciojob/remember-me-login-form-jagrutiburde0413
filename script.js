//your JS code here. If required.
  document.getElementById('submit').addEventListener('click', handleSubmit);
  document.addEventListener('DOMContentLoaded', function() {
      // Check if there are saved details in local storage
      var savedUsername = localStorage.getItem('username');
      var savedPassword = localStorage.getItem('password');

      // Display the "Login as existing user" button if there are saved details
      if (savedUsername && savedPassword) {
        var existingUserButton = document.createElement('button');
        existingUserButton.id = 'existing';
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener('click', function() {
          alert('Logged in as ' + savedUsername);
        });
        document.body.appendChild(existingUserButton);
      }
    });

    function handleSubmit() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rememberMe = document.getElementById('checkbox').checked;

      if (rememberMe) {
        // Save details to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove saved details from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert('Logged in as ' + username);
    }