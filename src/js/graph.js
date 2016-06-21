import _ from './util';

export class Graph {
  constructor(el) {
    this.el = el;
    this.data = this.genData();
  }

  go() {
    console.log(this.data);
  }

  genData() {
    let years = [2015, 2016];

    let months = ['January', 'February', 'March', 'April',
                  'May', 'June', 'July', 'August', 'September',
                  'October', 'November', 'December'];

    let days = _.range(1, 31);

    let data = [];

    for (var year of years) {
      for (var month of months) {
        for (var day of days) {
          data.push({
            year: year,
            month: month,
            day: day,
            money: _.randint(0, 1000),
            likes: _.randint(0, 1000),
            views: _.randint(0, 10000),
            shares: _.randint(0, 1000)
          });
        }
      }
    }

    return data;
  }
}

