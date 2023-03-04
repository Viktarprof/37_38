class Job {
    name

    price

    deadline

    constructor(name, deadline, price) {
        this.name = name
        this.price = price;
        this.deadline = deadline;
    }
}
// Example
// 1 2 3 4 5 6 7 8
// startDay = 3
// endDay = 7
// we can do jobs at days 3, 4, 5, 6, 7

function maximizePrice(jobs, startDay, endDay) {
    // sort by price
    jobs.sort((job1, job2) => job2.price - job1.price)
    // create some container for free slots
    // arr of boolean
    const slots = []

    // create some container for selected jobs
    // arr of jobs
    const selectedJobs = []

    // for each job
    for (let i = 0; i < jobs.length; i++) {
        const currentJob = jobs[i];
        //      if we can take it
        if (currentJob.deadline >= startDay) {
            //          find appropriate slot in schedule (for)
            for (let j = endDay - startDay; j >= 0 ; j--) { // for each slot
                if (!slots[j] && // slot is not occupied by another job
                    (startDay + j) <= endDay && // slot is not greater than end
                    (startDay + j) <= currentJob.deadline) //we can do the job before deadline
                {
                    slots[j] = true
                    selectedJobs[j] = currentJob
                    break;
                }
            }
        }
    }

    // return selected jobs
    return selectedJobs;
}

const jobs = []
jobs.push(new Job("r", 1, 120));
jobs.push(new Job("b", 2, 10));
jobs.push(new Job("c", 2, 40)); //!
jobs.push(new Job("d", 2, 30));
jobs.push(new Job("a", 4, 20)); //!
jobs.push(new Job("a", 5, 5));
jobs.push(new Job("e", 6, 60)); //!
jobs.push(new Job("f", 8, 90)); //!

const result = maximizePrice(jobs, 2 ,5)
console.log(result)