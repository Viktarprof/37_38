class Activity {

    name

    startTime

    endTime

    constructor(name, startTime, endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

// Жадный шаг: брать заявку с самым ранним временем окончания
// Шаг проверки - следующая заявка не пересекается с уже выбранными
//
function maximizeNumberOfActivities(activities) {
    // сортируем активности по времени окончания
    activities.sort((activity1, activity2) => activity1.endTime - activity2.endTime)
    // будем хранить результат
    const selectedActivities = []
    // активность, которая заканчивается раньше всех, мы выбираем всегда
    // т.к. у нас не выбрано ещё ни одной, то не может быть никаких конфликтов
    const firstActivity = activities[0]
    selectedActivities.push(firstActivity)
    let lastChosenActivity = firstActivity;
    // по порядку проверяем остальным активности
    for (let i = 0; i < activities.length; i++) {
        let currentActivity = activities[i]
        // условие непересечения
        if (currentActivity.startTime >= lastChosenActivity.endTime) {
            selectedActivities.push(currentActivity)
            lastChosenActivity = currentActivity
        }
    }
    // returns list of selected activities
    return selectedActivities
}

/// Check
const activitiesToSchedule = [];
activitiesToSchedule.push(new Activity("1", 715,830))
activitiesToSchedule.push(new Activity("2", 930,1430))
activitiesToSchedule.push(new Activity("3", 715,1100))
activitiesToSchedule.push(new Activity("4", 1115,1245))
activitiesToSchedule.push(new Activity("5", 830,1045))
activitiesToSchedule.push(new Activity("6", 1215,1430))
activitiesToSchedule.push(new Activity("7", 715,930))
activitiesToSchedule.push(new Activity("8", 945,1115))
activitiesToSchedule.push(new Activity("9", 1300,1500))
// ... more to come

const selectedActivities = maximizeNumberOfActivities(activitiesToSchedule)

console.log(selectedActivities)
