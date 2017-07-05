import { Meteor } from 'meteor/meteor';

import { dbDonuts, dbDonutsMenu } from '../imports/api/donuts.js';

Meteor.startup(() => {
    //Publish the database collections in order to be able to access them from the client

    Meteor.publish("userData", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
        }
    });

    Meteor.publish("donuts", function () {
        return dbDonuts.find({});
    });

    Meteor.publish("donuts_menu", function () {
        return dbDonutsMenu.find({});
    });
});


