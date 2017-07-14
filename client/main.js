import { Template } from 'meteor/templating';
import { Button } from 'meteor/jagi:components';

import './main.html';

Template.body.helpers({
  Button: () => Button
});