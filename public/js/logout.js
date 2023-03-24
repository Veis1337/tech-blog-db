const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};


// WAS ATTEMPTING TO GET IDLE SESSION VARIABLE FUNCTIONING, turns out not necessary...

// function setIdle() {

//   alert("You have been idle for too long, you must log in again to add, update, or delete")
// }

document.querySelector('#logout-link').addEventListener('click', logout);

// Idle force logout
function idle() {

  const idleDurationSecs = 30;    // X number of seconds
  const redirectUrl = '/api/user/logout';  // Redirect idle users to this URL
  let idleTimeout; // variable to hold the timeout, do not modify

  const resetIdleTimeout = function() {

      // Clears the existing timeout
      if(idleTimeout) clearTimeout(idleTimeout);

      // Set a new idle timeout to load the redirectUrl after idleDurationSecs
      idleTimeout = setTimeout(() => logout(), idleDurationSecs * 1000);
  };

  // Init on page load
  resetIdleTimeout();

  // Reset the idle timeout on any of the events listed below
  ['click', 'touchstart', 'mousemove'].forEach(evt => 
      document.addEventListener(evt, resetIdleTimeout, false)
  );

};

idle();
