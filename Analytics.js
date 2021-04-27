import * as Amplitude from 'expo-analytics-amplitude';
import { AMPLITUDE_API_KEY } from '@env';

let isInitialized = false;
const apiKey = AMPLITUDE_API_KEY;

export const events = {
  REGISTERED: 'REGISTERED',
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
    Amplitude.logEventAsync(event);
  }
}

export default {
  events,
  initialize,
  track,
};
