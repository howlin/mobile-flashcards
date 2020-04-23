This project was bootstrapped with [create-react-native-app](https://github.com/expo/create-react-native-app).

## How to Run Locally 
- Clone this repo
- From the command line, navigate to the project directory 
- Run `yarn` to install project dependancies 
- Run `yarn start` to run the app in development mode


## Available Scripts

In the project directory, you can run:

- yarn start -- Runs the app in the development mode
- yarn ios -- (react-native run-ios) Build the iOS App (requires a MacOS computer).
- yarn android -- (react-native run-android) Build the Android App.
- yarn web -- (expo start:web) Run the website in your browser.


## Support Devices

The app has been tested on 

- iOS Simulator 
- Android Emulator (Pixel 3a.  Android version R)
- iPhone XS Max


## Notes
- Each time a quiz starts the cards are shuffled 
- When a quiz starts, a view is generated for each card in the deck and stacked on top of each other.  I've rotated each card slightly and randomly to give the impression of a stack of cards.  Not convinced it's a good look :) 
- The animations that's triggered after answering a question are pretty smooth in the iOS simulator and device, but are laggy on the Android emulator