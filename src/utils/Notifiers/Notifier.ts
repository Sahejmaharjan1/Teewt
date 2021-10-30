import { showMessage } from 'react-native-flash-message';
import { errorMessages, successMessages } from '../en';
import { NotifierTitle } from '../enums';
import { generateErrorMessage } from '../utilFunctions';

const success = (title: NotifierTitle, description?: string): void => {
  showMessage({
    message: successMessages[title].message,
    description: description || successMessages[title].description,
    type: 'success',
    position: 'bottom',
    duration: 1000,
  });
};

const error = (title: NotifierTitle, description?: string): void => {
  showMessage({
    ...generateErrorMessage(title, description),
    type: 'danger',
    position: 'bottom',
    duration: 1000,
  });
};

const generic = (): void => {
  showMessage({
    message: errorMessages.generic.message,
    description: errorMessages.generic.description,
    type: 'danger',
    position: 'bottom',
    duration: 1000,
  });
};

const notifier = {
  error,
  generic,
  success,
};

export default notifier;
