sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            // Create and set JSONModel with mock data
            const oModel = new JSONModel({
                student: {
                    name: "Muhammad Azri",
                    studentId: "C1200123",
                    program: "Bachelor of Computer Science (Software Engineering)",
                    gpa: "3.45",
                    gpaStatus: "Good Standing",
                    totalCredits: "18",
                    attendanceAvg: "92"
                },
                courses: [
                    {
                        courseCode: "BIC21303",
                        courseName: "Object-Oriented Programming",
                        section: "2",
                        credits: "3",
                        grade: "A-",
                        score: "82",
                        attendance: "86",
                        gradeState: "Success"
                    },
                    {
                        courseCode: "BIC21203",
                        courseName: "Data Structures & Algorithms",
                        section: "1",
                        credits: "4",
                        grade: "B+",
                        score: "78",
                        attendance: "100",
                        gradeState: "Information"
                    },
                    {
                        courseCode: "BIC31403",
                        courseName: "Database Systems",
                        section: "3",
                        credits: "3",
                        grade: "A",
                        score: "88",
                        attendance: "81",
                        gradeState: "Success"
                    },
                    {
                        courseCode: "BIC20903",
                        courseName: "Software Engineering Principles",
                        section: "2",
                        credits: "3",
                        grade: "B",
                        score: "72",
                        attendance: "73",
                        gradeState: "Information"
                    },
                    {
                        courseCode: "MPU3113",
                        courseName: "Pengajian Malaysia",
                        section: "5",
                        credits: "3",
                        grade: "A-",
                        score: "85",
                        attendance: "93",
                        gradeState: "Success"
                    },
                    {
                        courseCode: "BIC21103",
                        courseName: "Discrete Mathematics",
                        section: "1",
                        credits: "2",
                        grade: "C+",
                        score: "65",
                        attendance: "87",
                        gradeState: "Information"
                    }
                ]
            });

            // Set model to view
            this.getView().setModel(oModel);
        }
    });
});
