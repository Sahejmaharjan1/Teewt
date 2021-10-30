import { NotifierTitle } from './enums';

const errorMessages = {
  generic: {
    message: 'Something went wrong',
    description: 'Internal Server Error',
  },
  default: {
    message: 'Failed - ~~~',
    description: 'Could not ~~~ at the moment',
  },
};

const successMessages = {
  [NotifierTitle.GENERIC]: {
    message: 'Generic message',
    description: 'Generic description',
  },
  [NotifierTitle.LOGIN]: { message: 'Logged in Successfully.', description: 'You have been logged in.' },
  [NotifierTitle.FEEDS]: { message: 'UserFeed' },
  [NotifierTitle.POST]: { message: 'Post' },
  [NotifierTitle.PROFILE]: { message: 'Profile' },
};
export { errorMessages, successMessages };
