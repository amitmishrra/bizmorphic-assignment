export const roles = ["Read", "Write", "Read + Write", "Admin"];
export const status = ["Active", "Inactive"]
// const mockData = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
//   email: `user${i + 1}@mailsac.com`,
//   phone: `123-456-78${i.toString().padStart(2, "0")}`,
//   website: `https://user${i + 1}.com`,
//   joined: new Date(
//     2023,
//     Math.floor(Math.random() * 12),
//     Math.floor(Math.random() * 28) + 1
//   ),
//   active: i % 2 === 0,
//   role: roles[Math.floor(Math.random() * roles.length)],
// }));

const mockData = [
    {
        "id": 1,
        "name": "User 1",
        "email": "user1@mailsac.com",
        "phone": "123-456-7800",
        "website": "https://user1.com",
        "joined": "2023-12-09T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 2,
        "name": "User 2",
        "email": "user2@mailsac.com",
        "phone": "123-456-7801",
        "website": "https://user2.com",
        "joined": "2023-08-31T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 3,
        "name": "User 3",
        "email": "user3@mailsac.com",
        "phone": "123-456-7802",
        "website": "https://user3.com",
        "joined": "2023-08-26T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 4,
        "name": "User 4",
        "email": "user4@mailsac.com",
        "phone": "123-456-7803",
        "website": "https://user4.com",
        "joined": "2023-08-02T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 5,
        "name": "User 5",
        "email": "user5@mailsac.com",
        "phone": "123-456-7804",
        "website": "https://user5.com",
        "joined": "2023-05-03T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 6,
        "name": "User 6",
        "email": "user6@mailsac.com",
        "phone": "123-456-7805",
        "website": "https://user6.com",
        "joined": "2023-07-04T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 7,
        "name": "User 7",
        "email": "user7@mailsac.com",
        "phone": "123-456-7806",
        "website": "https://user7.com",
        "joined": "2023-07-05T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 8,
        "name": "User 8",
        "email": "user8@mailsac.com",
        "phone": "123-456-7807",
        "website": "https://user8.com",
        "joined": "2023-12-21T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 9,
        "name": "User 9",
        "email": "user9@mailsac.com",
        "phone": "123-456-7808",
        "website": "https://user9.com",
        "joined": "2023-04-01T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 10,
        "name": "User 10",
        "email": "user10@mailsac.com",
        "phone": "123-456-7809",
        "website": "https://user10.com",
        "joined": "2023-03-17T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 11,
        "name": "User 11",
        "email": "user11@mailsac.com",
        "phone": "123-456-7810",
        "website": "https://user11.com",
        "joined": "2023-06-03T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 12,
        "name": "User 12",
        "email": "user12@mailsac.com",
        "phone": "123-456-7811",
        "website": "https://user12.com",
        "joined": "2023-03-23T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 13,
        "name": "User 13",
        "email": "user13@mailsac.com",
        "phone": "123-456-7812",
        "website": "https://user13.com",
        "joined": "2023-05-24T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 14,
        "name": "User 14",
        "email": "user14@mailsac.com",
        "phone": "123-456-7813",
        "website": "https://user14.com",
        "joined": "2023-07-20T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 15,
        "name": "User 15",
        "email": "user15@mailsac.com",
        "phone": "123-456-7814",
        "website": "https://user15.com",
        "joined": "2023-12-14T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 16,
        "name": "User 16",
        "email": "user16@mailsac.com",
        "phone": "123-456-7815",
        "website": "https://user16.com",
        "joined": "2023-04-19T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 17,
        "name": "User 17",
        "email": "user17@mailsac.com",
        "phone": "123-456-7816",
        "website": "https://user17.com",
        "joined": "2023-01-19T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 18,
        "name": "User 18",
        "email": "user18@mailsac.com",
        "phone": "123-456-7817",
        "website": "https://user18.com",
        "joined": "2023-11-10T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 19,
        "name": "User 19",
        "email": "user19@mailsac.com",
        "phone": "123-456-7818",
        "website": "https://user19.com",
        "joined": "2023-07-17T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 20,
        "name": "User 20",
        "email": "user20@mailsac.com",
        "phone": "123-456-7819",
        "website": "https://user20.com",
        "joined": "2023-02-26T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 21,
        "name": "User 21",
        "email": "user21@mailsac.com",
        "phone": "123-456-7820",
        "website": "https://user21.com",
        "joined": "2023-09-05T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 22,
        "name": "User 22",
        "email": "user22@mailsac.com",
        "phone": "123-456-7821",
        "website": "https://user22.com",
        "joined": "2023-01-21T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 23,
        "name": "User 23",
        "email": "user23@mailsac.com",
        "phone": "123-456-7822",
        "website": "https://user23.com",
        "joined": "2023-04-14T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 24,
        "name": "User 24",
        "email": "user24@mailsac.com",
        "phone": "123-456-7823",
        "website": "https://user24.com",
        "joined": "2023-04-17T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 25,
        "name": "User 25",
        "email": "user25@mailsac.com",
        "phone": "123-456-7824",
        "website": "https://user25.com",
        "joined": "2023-11-08T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 26,
        "name": "User 26",
        "email": "user26@mailsac.com",
        "phone": "123-456-7825",
        "website": "https://user26.com",
        "joined": "2023-07-02T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 27,
        "name": "User 27",
        "email": "user27@mailsac.com",
        "phone": "123-456-7826",
        "website": "https://user27.com",
        "joined": "2023-04-07T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 28,
        "name": "User 28",
        "email": "user28@mailsac.com",
        "phone": "123-456-7827",
        "website": "https://user28.com",
        "joined": "2023-09-16T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 29,
        "name": "User 29",
        "email": "user29@mailsac.com",
        "phone": "123-456-7828",
        "website": "https://user29.com",
        "joined": "2023-07-18T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 30,
        "name": "User 30",
        "email": "user30@mailsac.com",
        "phone": "123-456-7829",
        "website": "https://user30.com",
        "joined": "2023-08-16T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 31,
        "name": "User 31",
        "email": "user31@mailsac.com",
        "phone": "123-456-7830",
        "website": "https://user31.com",
        "joined": "2023-11-22T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 32,
        "name": "User 32",
        "email": "user32@mailsac.com",
        "phone": "123-456-7831",
        "website": "https://user32.com",
        "joined": "2023-04-06T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 33,
        "name": "User 33",
        "email": "user33@mailsac.com",
        "phone": "123-456-7832",
        "website": "https://user33.com",
        "joined": "2023-12-25T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 34,
        "name": "User 34",
        "email": "user34@mailsac.com",
        "phone": "123-456-7833",
        "website": "https://user34.com",
        "joined": "2023-09-06T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 35,
        "name": "User 35",
        "email": "user35@mailsac.com",
        "phone": "123-456-7834",
        "website": "https://user35.com",
        "joined": "2023-07-08T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 36,
        "name": "User 36",
        "email": "user36@mailsac.com",
        "phone": "123-456-7835",
        "website": "https://user36.com",
        "joined": "2023-03-31T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 37,
        "name": "User 37",
        "email": "user37@mailsac.com",
        "phone": "123-456-7836",
        "website": "https://user37.com",
        "joined": "2023-11-17T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 38,
        "name": "User 38",
        "email": "user38@mailsac.com",
        "phone": "123-456-7837",
        "website": "https://user38.com",
        "joined": "2023-04-30T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 39,
        "name": "User 39",
        "email": "user39@mailsac.com",
        "phone": "123-456-7838",
        "website": "https://user39.com",
        "joined": "2023-02-05T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 40,
        "name": "User 40",
        "email": "user40@mailsac.com",
        "phone": "123-456-7839",
        "website": "https://user40.com",
        "joined": "2023-04-19T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 41,
        "name": "User 41",
        "email": "user41@mailsac.com",
        "phone": "123-456-7840",
        "website": "https://user41.com",
        "joined": "2023-09-23T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 42,
        "name": "User 42",
        "email": "user42@mailsac.com",
        "phone": "123-456-7841",
        "website": "https://user42.com",
        "joined": "2023-02-06T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 43,
        "name": "User 43",
        "email": "user43@mailsac.com",
        "phone": "123-456-7842",
        "website": "https://user43.com",
        "joined": "2023-10-26T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 44,
        "name": "User 44",
        "email": "user44@mailsac.com",
        "phone": "123-456-7843",
        "website": "https://user44.com",
        "joined": "2023-06-23T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 45,
        "name": "User 45",
        "email": "user45@mailsac.com",
        "phone": "123-456-7844",
        "website": "https://user45.com",
        "joined": "2023-01-18T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 46,
        "name": "User 46",
        "email": "user46@mailsac.com",
        "phone": "123-456-7845",
        "website": "https://user46.com",
        "joined": "2023-11-16T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 47,
        "name": "User 47",
        "email": "user47@mailsac.com",
        "phone": "123-456-7846",
        "website": "https://user47.com",
        "joined": "2023-07-24T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 48,
        "name": "User 48",
        "email": "user48@mailsac.com",
        "phone": "123-456-7847",
        "website": "https://user48.com",
        "joined": "2023-11-10T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 49,
        "name": "User 49",
        "email": "user49@mailsac.com",
        "phone": "123-456-7848",
        "website": "https://user49.com",
        "joined": "2023-11-20T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 50,
        "name": "User 50",
        "email": "user50@mailsac.com",
        "phone": "123-456-7849",
        "website": "https://user50.com",
        "joined": "2023-11-21T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 51,
        "name": "User 51",
        "email": "user51@mailsac.com",
        "phone": "123-456-7850",
        "website": "https://user51.com",
        "joined": "2023-08-01T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 52,
        "name": "User 52",
        "email": "user52@mailsac.com",
        "phone": "123-456-7851",
        "website": "https://user52.com",
        "joined": "2023-11-06T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 53,
        "name": "User 53",
        "email": "user53@mailsac.com",
        "phone": "123-456-7852",
        "website": "https://user53.com",
        "joined": "2023-03-05T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 54,
        "name": "User 54",
        "email": "user54@mailsac.com",
        "phone": "123-456-7853",
        "website": "https://user54.com",
        "joined": "2023-01-20T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 55,
        "name": "User 55",
        "email": "user55@mailsac.com",
        "phone": "123-456-7854",
        "website": "https://user55.com",
        "joined": "2023-07-13T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 56,
        "name": "User 56",
        "email": "user56@mailsac.com",
        "phone": "123-456-7855",
        "website": "https://user56.com",
        "joined": "2023-02-15T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 57,
        "name": "User 57",
        "email": "user57@mailsac.com",
        "phone": "123-456-7856",
        "website": "https://user57.com",
        "joined": "2023-04-10T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 58,
        "name": "User 58",
        "email": "user58@mailsac.com",
        "phone": "123-456-7857",
        "website": "https://user58.com",
        "joined": "2023-03-18T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 59,
        "name": "User 59",
        "email": "user59@mailsac.com",
        "phone": "123-456-7858",
        "website": "https://user59.com",
        "joined": "2023-07-26T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 60,
        "name": "User 60",
        "email": "user60@mailsac.com",
        "phone": "123-456-7859",
        "website": "https://user60.com",
        "joined": "2023-03-26T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 61,
        "name": "User 61",
        "email": "user61@mailsac.com",
        "phone": "123-456-7860",
        "website": "https://user61.com",
        "joined": "2023-09-09T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 62,
        "name": "User 62",
        "email": "user62@mailsac.com",
        "phone": "123-456-7861",
        "website": "https://user62.com",
        "joined": "2023-05-17T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 63,
        "name": "User 63",
        "email": "user63@mailsac.com",
        "phone": "123-456-7862",
        "website": "https://user63.com",
        "joined": "2023-03-01T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 64,
        "name": "User 64",
        "email": "user64@mailsac.com",
        "phone": "123-456-7863",
        "website": "https://user64.com",
        "joined": "2023-09-04T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 65,
        "name": "User 65",
        "email": "user65@mailsac.com",
        "phone": "123-456-7864",
        "website": "https://user65.com",
        "joined": "2023-05-13T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 66,
        "name": "User 66",
        "email": "user66@mailsac.com",
        "phone": "123-456-7865",
        "website": "https://user66.com",
        "joined": "2023-08-23T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 67,
        "name": "User 67",
        "email": "user67@mailsac.com",
        "phone": "123-456-7866",
        "website": "https://user67.com",
        "joined": "2023-04-24T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 68,
        "name": "User 68",
        "email": "user68@mailsac.com",
        "phone": "123-456-7867",
        "website": "https://user68.com",
        "joined": "2023-08-20T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 69,
        "name": "User 69",
        "email": "user69@mailsac.com",
        "phone": "123-456-7868",
        "website": "https://user69.com",
        "joined": "2023-10-22T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 70,
        "name": "User 70",
        "email": "user70@mailsac.com",
        "phone": "123-456-7869",
        "website": "https://user70.com",
        "joined": "2023-11-06T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 71,
        "name": "User 71",
        "email": "user71@mailsac.com",
        "phone": "123-456-7870",
        "website": "https://user71.com",
        "joined": "2023-05-10T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 72,
        "name": "User 72",
        "email": "user72@mailsac.com",
        "phone": "123-456-7871",
        "website": "https://user72.com",
        "joined": "2023-12-16T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 73,
        "name": "User 73",
        "email": "user73@mailsac.com",
        "phone": "123-456-7872",
        "website": "https://user73.com",
        "joined": "2023-04-18T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 74,
        "name": "User 74",
        "email": "user74@mailsac.com",
        "phone": "123-456-7873",
        "website": "https://user74.com",
        "joined": "2023-01-11T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 75,
        "name": "User 75",
        "email": "user75@mailsac.com",
        "phone": "123-456-7874",
        "website": "https://user75.com",
        "joined": "2023-12-08T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 76,
        "name": "User 76",
        "email": "user76@mailsac.com",
        "phone": "123-456-7875",
        "website": "https://user76.com",
        "joined": "2023-03-19T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 77,
        "name": "User 77",
        "email": "user77@mailsac.com",
        "phone": "123-456-7876",
        "website": "https://user77.com",
        "joined": "2023-11-08T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 78,
        "name": "User 78",
        "email": "user78@mailsac.com",
        "phone": "123-456-7877",
        "website": "https://user78.com",
        "joined": "2023-09-08T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 79,
        "name": "User 79",
        "email": "user79@mailsac.com",
        "phone": "123-456-7878",
        "website": "https://user79.com",
        "joined": "2023-11-10T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 80,
        "name": "User 80",
        "email": "user80@mailsac.com",
        "phone": "123-456-7879",
        "website": "https://user80.com",
        "joined": "2023-07-08T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 81,
        "name": "User 81",
        "email": "user81@mailsac.com",
        "phone": "123-456-7880",
        "website": "https://user81.com",
        "joined": "2023-01-16T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 82,
        "name": "User 82",
        "email": "user82@mailsac.com",
        "phone": "123-456-7881",
        "website": "https://user82.com",
        "joined": "2023-12-21T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 83,
        "name": "User 83",
        "email": "user83@mailsac.com",
        "phone": "123-456-7882",
        "website": "https://user83.com",
        "joined": "2023-08-19T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 84,
        "name": "User 84",
        "email": "user84@mailsac.com",
        "phone": "123-456-7883",
        "website": "https://user84.com",
        "joined": "2023-03-31T18:30:00.000Z",
        "active": false,
        "role": "Admin"
    },
    {
        "id": 85,
        "name": "User 85",
        "email": "user85@mailsac.com",
        "phone": "123-456-7884",
        "website": "https://user85.com",
        "joined": "2023-12-01T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 86,
        "name": "User 86",
        "email": "user86@mailsac.com",
        "phone": "123-456-7885",
        "website": "https://user86.com",
        "joined": "2023-06-19T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 87,
        "name": "User 87",
        "email": "user87@mailsac.com",
        "phone": "123-456-7886",
        "website": "https://user87.com",
        "joined": "2023-05-01T18:30:00.000Z",
        "active": true,
        "role": "Admin"
    },
    {
        "id": 88,
        "name": "User 88",
        "email": "user88@mailsac.com",
        "phone": "123-456-7887",
        "website": "https://user88.com",
        "joined": "2023-02-12T18:30:00.000Z",
        "active": false,
        "role": "Write"
    },
    {
        "id": 89,
        "name": "User 89",
        "email": "user89@mailsac.com",
        "phone": "123-456-7888",
        "website": "https://user89.com",
        "joined": "2023-06-21T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 90,
        "name": "User 90",
        "email": "user90@mailsac.com",
        "phone": "123-456-7889",
        "website": "https://user90.com",
        "joined": "2023-07-02T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 91,
        "name": "User 91",
        "email": "user91@mailsac.com",
        "phone": "123-456-7890",
        "website": "https://user91.com",
        "joined": "2023-08-06T18:30:00.000Z",
        "active": true,
        "role": "Read + Write"
    },
    {
        "id": 92,
        "name": "User 92",
        "email": "user92@mailsac.com",
        "phone": "123-456-7891",
        "website": "https://user92.com",
        "joined": "2023-07-17T18:30:00.000Z",
        "active": false,
        "role": "Read + Write"
    },
    {
        "id": 93,
        "name": "User 93",
        "email": "user93@mailsac.com",
        "phone": "123-456-7892",
        "website": "https://user93.com",
        "joined": "2023-07-10T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 94,
        "name": "User 94",
        "email": "user94@mailsac.com",
        "phone": "123-456-7893",
        "website": "https://user94.com",
        "joined": "2023-07-25T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 95,
        "name": "User 95",
        "email": "user95@mailsac.com",
        "phone": "123-456-7894",
        "website": "https://user95.com",
        "joined": "2023-03-19T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 96,
        "name": "User 96",
        "email": "user96@mailsac.com",
        "phone": "123-456-7895",
        "website": "https://user96.com",
        "joined": "2023-09-30T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 97,
        "name": "User 97",
        "email": "user97@mailsac.com",
        "phone": "123-456-7896",
        "website": "https://user97.com",
        "joined": "2023-08-02T18:30:00.000Z",
        "active": true,
        "role": "Read"
    },
    {
        "id": 98,
        "name": "User 98",
        "email": "user98@mailsac.com",
        "phone": "123-456-7897",
        "website": "https://user98.com",
        "joined": "2023-03-05T18:30:00.000Z",
        "active": false,
        "role": "Read"
    },
    {
        "id": 99,
        "name": "User 99",
        "email": "user99@mailsac.com",
        "phone": "123-456-7898",
        "website": "https://user99.com",
        "joined": "2023-07-14T18:30:00.000Z",
        "active": true,
        "role": "Write"
    },
    {
        "id": 100,
        "name": "User 100",
        "email": "user100@mailsac.com",
        "phone": "123-456-7899",
        "website": "https://user100.com",
        "joined": "2023-01-06T18:30:00.000Z",
        "active": false,
        "role": "Read"
    }
]
  
  export default mockData;