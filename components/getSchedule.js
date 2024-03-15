const schedule = require('../data/schedule.json')

module.exports = function getSchedule(class_name, day) {
	return schedule[class_name][day]
}
