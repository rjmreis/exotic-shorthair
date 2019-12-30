[![Build Status](https://travis-ci.org/rjmreis/exotic-shorthair.svg?branch=master)](https://travis-ci.org/rjmreis/exotic-shorthair)

# exotic-shorthair :smiley_cat:
React Native boilerplate with everything needed to kickstart a new mobile application with a well structured application code.

## What's included

- React Native CLI typescript template
- UI Kitten
- Redux
- React Navigation
- Styled Components

## Getting Started

#### 1. React Native CLI Quickstart
Install iOS and Android dependencies
https://facebook.github.io/react-native/docs/getting-started

#### 2. Clone and Install

```bash
# Clone the repo
git clone git@github.com:rjmreis/exotic-shorthair.git

# Navigate to folder and Install dependencies
cd rn-starter && yarn
```

#### 3. Start your simulator

iOS
```
yarn ios
```

Android
```
yarn android
```

## Project Structure
```
.
├── android             * Android project and build
├── ios                 * iOS project and build
├── jest                * Jest setup
├── scripts             * Project scripts
├── src/
|   ├── __tests__/      * Jest tests
|   ├── components/     * Shared components
|   ├── screens/        * Screen components
|   ├── state/          * Redux state
|   ├── app.tsx         * Root React App
|   └── navigation.tsx  * React Navigation
└── ...                 * Boilerplate files
```

## License

[MIT License](LICENSE)
