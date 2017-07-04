import { Meteor } from 'meteor/meteor';

import '../imports/api/donuts.js';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("userData", function () {
  if (this.userId) {
  	console.log(Meteor.users.find({_id: this.userId}));
    return Meteor.users.find({_id: this.userId});
  } else {
    this.ready();
  }
});
});


