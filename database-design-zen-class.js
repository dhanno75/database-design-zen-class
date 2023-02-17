// User
const user = [
  {
    userID: 1,
    mentorID: 1,
    name: "Vivek",
    email: "vivek@gmail.com",
  },
  {
    userID: 2,
    mentorID: 2,
    name: "Rohan",
    email: "rohan@gmail.com",
  },
  {
    userID: 3,
    mentorID: 3,
    name: "Shreya",
    email: "shreya@gmail.com",
  },
  {
    userID: 4,
    mentorID: 4,
    name: "Hema",
    email: "hema@gmail.com",
  },
  {
    userID: 5,
    mentorID: 5,
    name: "Shanta",
    email: "shanta@gmail.com",
  },
];

// Codekata
const codekata = [
  {
    userID: 1,
    problemsSolved: 147,
  },
  {
    userID: 2,
    problemsSolved: 94,
  },
  {
    userID: 3,
    problemsSolved: 182,
  },
  {
    userID: 4,
    problemsSolved: 155,
  },
  {
    uuserID: 5,
    problemsSolved: 108,
  },
];

// Company drives
const companyDrives = [
  { userID: 1, companyName: "Google", date: new Date("5-oct-2020") },
  { userID: 2, companyName: "Amazon", date: new Date("16-oct-2020") },
  { userID: 1, companyName: "Akamai", date: new Date("19-oct-2020") },
  { userID: 3, companyName: "Netflix", date: new Date("22-oct-2020") },
  { userID: 4, companyName: "Facebook", date: new Date("28-oct-2020") },
  { userID: 5, companyName: "Vmware", date: new Date("31-oct-2020") },
  { userID: 5, companyName: "Honeywell", date: new Date("4-nov-2020") },
];

// Topics
const topics = [
  {
    topicID: 1,
    topicName: "Introduction to Javascript",
    taughtInMonth: new Date("5-oct-2020"),
  },
  {
    topicID: 2,
    topicName: "Promises",
    taughtInMonth: new Date("15-oct-2020"),
  },
  {
    topicID: 3,
    topicName: "React",
    taughtInMonth: new Date("18-oct-2020"),
  },
  {
    topicID: 4,
    topicName: "MongoDB",
    taughtInMonth: new Date("25-oct-2020"),
  },
  {
    topicID: 5,
    topicName: "NodeJS",
    taughtInMonth: new Date("1-nov-2020"),
  },
];

// Tasks
const tasks = [
  {
    taskID: 1,
    topicID: 1,
    userID: 1,
    task: "Write a blog on Difference between HTTP1.1 vs HTTP2",
    topicName: "Introduction to Javascript",
    deadLine: new Date("5-oct-2020"),
    submitted: true,
  },
  {
    taskID: 2,
    topicID: 2,
    userID: 2,
    task: "Array task",
    topicName: "Introduction to Javascript",
    deadLine: new Date("15-oct-2020"),
    submitted: false,
  },
  {
    taskID: 3,
    topicID: 3,
    userID: 3,
    task: "Rest countries task",
    topicName: "Promises",
    deadLine: new Date("18-oct-2020"),
    submitted: true,
  },
  {
    taskID: 4,
    topicID: 4,
    userID: 4,
    task: "Dashboard task",
    topicName: "React",
    deadLine: new Date("25-oct-2020"),
    submitted: true,
  },
  {
    taskID: 4,
    topicID: 4,
    userID: 4,
    task: "Password reset flow",
    topicName: "Node",
    deadLine: new Date("1-nov-2020"),
    submitted: true,
  },
];

// Attendance
const attendance = [
  {
    userID: 1,
    topicID: 4,
    attended: true,
  },
  {
    userID: 2,
    topicID: 1,
    attended: false,
  },
  {
    userID: 3,
    topicID: 5,
    attended: true,
  },
  {
    userID: 4,
    topicID: 2,
    attended: false,
  },
  {
    userID: 5,
    topicID: 3,
    attended: true,
  },
];

// Mentors
const mentors = [
  {
    mentorID: 1,
    mentorName: "Jagdish",
    mentorEmail: "jagdish@gmail.com",
    students: 11,
  },
  {
    mentorID: 2,
    mentorName: "Sneha",
    mentorEmail: "sneha@gmail.com",
    students: 24,
  },
  {
    mentorID: 3,
    mentorName: "Anupam",
    mentorEmail: "anupam@gmail.com",
    students: 20,
  },
  {
    mentorID: 4,
    mentorName: "Priya",
    mentorEmail: "priya@gmail.com",
    students: 10,
  },
  {
    mentorID: 5,
    mentorName: "Manisha",
    mentorEmail: "manisha@gmail.com",
    students: 18,
  },
];

// Solutions
/////////////////// 1 ///////////////////
// 1 Find all the topics and tasks which are taught in the month of October
/*
db.topics.aggregate([
  {
    $lookup:
      {
        from: "tasks",
        localField: "topicID",
        foreignField: "topicID",
        as: "tasksData",
      },
  },
  {
    $project:
      {
        topicID: 1,
        topicName: 1,
        topicMonth: {
          $month: "$taughtInMonth",
        },
        "tasksData.task": 1,
        "tasksData.deadLine": 1,
      },
  },
  {
    $match:
      {
        topicMonth: 10,
      },
  },
]);
*/

/////////////////////// 2 ///////////////////////

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
/*
db.companyDrives.find({
  "date": {
    "$gte": ISODate("2020-10-15"),
    $lt: ISODate("2020-10-31")
  }
})
*/

/////////////////////// 3 ///////////////////////

// 3) Find all the company drives and students who appeared for the placement.
/*
db.users.aggregate([
  {
    $lookup:
      {
        from: "companyDrives",
        localField: "userID",
        foreignField: "userID",
        as: "companyAttended",
      },
  },
  {
    $project:
      {
        name: 1,
        email: 1,
        "companyAttended.companyName": 1,
        "companyAttended.date": 1,
      },
  },
]);
*/

/////////////////////// 4 ///////////////////////

// 4 Find the number of problems solved by the user in codekata
/*
db.codekata.aggregate[
  {
    $lookup:
      {
        from: "users",
        localField: "userID",
        foreignField: "userID",
        as: "user",
      },
  },
  {
    $project:
      {
        problemsSolved: 1,
        "user.name": 1,
        "user.email": 1,
      },
  },
]);
*/

/////////////////////// 5 ///////////////////////

// 5) Find all the mentors with who has the mentee's count more than 15
/*
db.mentors.find({
  students: {
    $gt: 15,
  },
});
*/

/////////////////////// 6 ///////////////////////

// 6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
/*
db.users.aggregate([
  {
    $lookup: {
      from: "attendance",
      localField: "userID",
      foreignField: "userID",
      as: "attendanceData",
    },
  },
  {
    $project: {
      userID: 1,
      name: 1,
      email: 1,
      "attendanceData.attended": 1,
    },
  },
  {
    $match: {
      "attendanceData.attended": false,
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "userID",
      foreignField: "userID",
      as: "result",
    },
  },
  {
    $project: {
      userID: 1,
      name: 1,
      email: 1,
      "attendanceData.attended": 1,
      "result.task": 1,
      "result.submitted": 1,
      submissionDates: {
        $and: [
          {
            $gt: ["$result.deadLine", new Date("15-oct-2020")],
          },
          {
            $lt: ["$result.deadLine", new Date("30-oct-2020")],
          },
        ],
      },
    },
  },
]);
*/
