module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: [
      './templates/**/*.html'
    ],
    options: {
      safelist: [
        {
          pattern: /data-theme/
        }
      ]
    },
    plugins: [
      require('daisyui'),
      require('@tailwindcss/forms')
    ]
  };