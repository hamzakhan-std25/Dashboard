    export function toggleTheme() {

      console.log('theme btn is clicked.')
      
      const body = document.body;
      body.classList.toggle('dark-theme');

      // Optional: Store user preference in localStorage for persistence
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    // Optional: Load saved theme preference on page load
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const savedTheme = localStorage.getItem('theme');
  //     if (savedTheme === 'dark') {
  //       document.body.classList.add('dark-theme');
  //     }
  //   }
  // );