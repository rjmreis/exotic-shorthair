const { spawn } = require('child_process');
const { Select } = require('enquirer');
const actions = require('enquirer/lib/combos');

const runSimulator = sim => {
  spawn('yarn', ['react-native', 'run-ios', `--simulator=${sim}`], { stdio: 'inherit' });
};

(function main() {
  const choices = [
    'iPad Air',
    'iPhone 5s',
    'iPhone 6',
    'iPhone 7',
    'iPhone 8',
    'iPhone X',
    'iPhone XR',
    'iPhone XS Max',
    'iPhone XS',
    'iPhone 11',
    'iPhone 11 Pro',
  ];

  const prompt = new Select({
    name: 'simulator',
    message: 'Choose your simulator',
    choices,
    actions,
  });

  prompt
    .run()
    .then(runSimulator)
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
})();
