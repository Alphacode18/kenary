import * as Amplitude from 'expo-analytics-amplitude';
import { AMPLITUDE_API_KEY } from '@env';

let isInitialized = false;
const apiKey = AMPLITUDE_API_KEY;

export const events = {
  OPEN: 'OPEN',
  ONBOARDED: 'ONBOARDED',
};

export function initialize() {
  if (isInitialized || !apiKey) {
    return;
  }

  Amplitude.initializeAsync(apiKey);
  isInitialized = true;
}

export function track(event, options) {
  initialize();

  if (options) {
    Amplitude.logEventWithPropertiesAsync(event, options);
  } else {
    Amplitude.logEventAsync(event)
      .then(() => {
        console.log('Sent Event: ' + event);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default {
  events,
  initialize,
  track,
};
