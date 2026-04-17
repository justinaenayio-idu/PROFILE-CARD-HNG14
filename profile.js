/* ================================================================
   PROFILE CARD — profile.js

   Responsibilities:
   1. Set test-user-time to Date.now() (milliseconds) on load
   2. Update it every 1000ms so it stays current
      aria-live="polite" on the element notifies screen readers
   ================================================================ */

'use strict';

const timeEl = document.getElementById('user-time');

function updateTime() {
  const ms = Date.now();
  timeEl.textContent = ms.toLocaleString('en-US', { useGrouping: false });
  /* Keep datetime attribute in sync for machine-readability */
  timeEl.setAttribute('datetime', new Date(ms).toISOString());
}

/* Set immediately on load — no delay */
updateTime();

/* Refresh every 1000ms */
setInterval(updateTime, 1000);