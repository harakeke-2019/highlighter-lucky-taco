
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('star-signs').del()
    .then(function () {
      // Inserts seed entries
      return knex('star-signs').insert([
        {id: 1, name: 'aries', date: 'March 21 - April 19'},
        {id: 2, name: 'taurus', date: 'April 20 - May 20'},
        {id: 3, name: 'gemini', date: 'May 21 - June 20'},
        {id: 4, name: 'cancer', date: 'June 21 - July 22'},
        {id: 5, name: 'leo', date: 'July 23 - August 22'},
        {id: 6, name: 'virgo', date: 'August 23 - September 22'},
        {id: 7, name: 'libra', date: 'September 23 - October 22'},
        {id: 8, name: 'scorpio', date: 'October 23 - November 21'},
        {id: 9, name: 'sagittarius', date: 'November 22 - December 21'},
        {id: 10, name: 'capricorn', date: 'December 22 - January 19'},
        {id: 11, name: 'aquarius', date: 'January 20 - February 18'},
        {id: 12, name: 'pisces', date: 'February 19 - March 20'},
      ]);
    });
};
