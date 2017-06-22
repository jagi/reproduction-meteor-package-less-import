import { Template } from 'meteor/templating';
import { ReactComponent } from 'meteor/jagi:component';

import './main.html';

Template.body.helpers({
  ReactComponent: () => ReactComponent
});