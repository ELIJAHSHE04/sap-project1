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
                        gradeState: "Success",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "20",
                                    score: "18",
                                    maxScore: "20",
                                    percentage: "90",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "10",
                                    score: "8",
                                    maxScore: "10",
                                    percentage: "80",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "20",
                                    score: "15",
                                    maxScore: "20",
                                    percentage: "75",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Project",
                                    weight: "20",
                                    score: "0",
                                    maxScore: "20",
                                    percentage: "0",
                                    status: "Pending"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "30",
                                    score: "0",
                                    maxScore: "30",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 20, 2026"
                                }
                            ],
                            totalCarryMarks: "41",
                            totalCarryMarksMax: "50",
                            attendanceDetail: {
                                present: "12",
                                absent: "1",
                                excused: "1",
                                total: "14"
                            },
                            insights: "Student actively participates in lab sessions but missed the deadline for Assignment 2. Shows strong understanding of OOP principles. Recommend focusing on time management for final project."
                        }
                    },
                    {
                        courseCode: "BIC21203",
                        courseName: "Data Structures & Algorithms",
                        section: "1",
                        credits: "4",
                        grade: "B+",
                        score: "78",
                        attendance: "100",
                        gradeState: "Information",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "25",
                                    score: "22",
                                    maxScore: "25",
                                    percentage: "88",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "15",
                                    score: "12",
                                    maxScore: "15",
                                    percentage: "80",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "25",
                                    score: "18",
                                    maxScore: "25",
                                    percentage: "72",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Project",
                                    weight: "15",
                                    score: "0",
                                    maxScore: "15",
                                    percentage: "0",
                                    status: "Pending"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "20",
                                    score: "0",
                                    maxScore: "20",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 22, 2026"
                                }
                            ],
                            totalCarryMarks: "52",
                            totalCarryMarksMax: "65",
                            attendanceDetail: {
                                present: "15",
                                absent: "0",
                                excused: "0",
                                total: "15"
                            },
                            insights: "Excellent attendance record. Strong performance in assignments and quizzes. Needs improvement in exam preparation. Final project proposal approved."
                        }
                    },
                    {
                        courseCode: "BIC31403",
                        courseName: "Database Systems",
                        section: "3",
                        credits: "3",
                        grade: "A",
                        score: "88",
                        attendance: "81",
                        gradeState: "Success",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "20",
                                    score: "19",
                                    maxScore: "20",
                                    percentage: "95",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "10",
                                    score: "9",
                                    maxScore: "10",
                                    percentage: "90",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "25",
                                    score: "22",
                                    maxScore: "25",
                                    percentage: "88",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Project",
                                    weight: "20",
                                    score: "0",
                                    maxScore: "20",
                                    percentage: "0",
                                    status: "Pending"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "25",
                                    score: "0",
                                    maxScore: "25",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 25, 2026"
                                }
                            ],
                            totalCarryMarks: "50",
                            totalCarryMarksMax: "55",
                            attendanceDetail: {
                                present: "11",
                                absent: "2",
                                excused: "1",
                                total: "14"
                            },
                            insights: "Outstanding performance in database design and SQL queries. Excellent understanding of normalization concepts. Minor attendance issues noted."
                        }
                    },
                    {
                        courseCode: "BIC20903",
                        courseName: "Software Engineering Principles",
                        section: "2",
                        credits: "3",
                        grade: "B",
                        score: "72",
                        attendance: "73",
                        gradeState: "Information",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "20",
                                    score: "16",
                                    maxScore: "20",
                                    percentage: "80",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "10",
                                    score: "7",
                                    maxScore: "10",
                                    percentage: "70",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "20",
                                    score: "14",
                                    maxScore: "20",
                                    percentage: "70",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Project",
                                    weight: "25",
                                    score: "0",
                                    maxScore: "25",
                                    percentage: "0",
                                    status: "Pending"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "25",
                                    score: "0",
                                    maxScore: "25",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 18, 2026"
                                }
                            ],
                            totalCarryMarks: "37",
                            totalCarryMarksMax: "50",
                            attendanceDetail: {
                                present: "10",
                                absent: "3",
                                excused: "1",
                                total: "14"
                            },
                            insights: "Good understanding of software development lifecycle. Team collaboration skills need improvement. Attendance below expected level."
                        }
                    },
                    {
                        courseCode: "MPU3113",
                        courseName: "Pengajian Malaysia",
                        section: "5",
                        credits: "3",
                        grade: "A-",
                        score: "85",
                        attendance: "93",
                        gradeState: "Success",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "30",
                                    score: "27",
                                    maxScore: "30",
                                    percentage: "90",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "20",
                                    score: "17",
                                    maxScore: "20",
                                    percentage: "85",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "25",
                                    score: "21",
                                    maxScore: "25",
                                    percentage: "84",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "25",
                                    score: "0",
                                    maxScore: "25",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 15, 2026"
                                }
                            ],
                            totalCarryMarks: "65",
                            totalCarryMarksMax: "75",
                            attendanceDetail: {
                                present: "13",
                                absent: "1",
                                excused: "0",
                                total: "14"
                            },
                            insights: "Consistent performance throughout the semester. Good understanding of Malaysian history and culture. Active participation in class discussions."
                        }
                    },
                    {
                        courseCode: "BIC21103",
                        courseName: "Discrete Mathematics",
                        section: "1",
                        credits: "2",
                        grade: "C+",
                        score: "65",
                        attendance: "87",
                        gradeState: "Information",
                        expanded: false,
                        details: {
                            assessments: [
                                {
                                    name: "Assignments",
                                    weight: "20",
                                    score: "14",
                                    maxScore: "20",
                                    percentage: "70",
                                    status: "Completed"
                                },
                                {
                                    name: "Quizzes",
                                    weight: "15",
                                    score: "10",
                                    maxScore: "15",
                                    percentage: "67",
                                    status: "Completed"
                                },
                                {
                                    name: "Mid-Term Exam",
                                    weight: "30",
                                    score: "18",
                                    maxScore: "30",
                                    percentage: "60",
                                    status: "Completed"
                                },
                                {
                                    name: "Final Exam",
                                    weight: "35",
                                    score: "0",
                                    maxScore: "35",
                                    percentage: "0",
                                    status: "Scheduled",
                                    scheduledDate: "Jan 28, 2026"
                                }
                            ],
                            totalCarryMarks: "42",
                            totalCarryMarksMax: "65",
                            attendanceDetail: {
                                present: "12",
                                absent: "1",
                                excused: "1",
                                total: "14"
                            },
                            insights: "Struggling with abstract mathematical concepts. Recommend additional practice with proof techniques and set theory. Consider seeking tutoring support."
                        }
                    }
                ]
            });

            // Set model to view
            this.getView().setModel(oModel);
        },

        onPressCourse(oEvent) {
            const oItem = oEvent.getSource();
            const oBindingContext = oItem.getBindingContext();
            const oModel = this.getView().getModel();
            const sPath = oBindingContext.getPath();
            
            // Toggle expanded state
            const bExpanded = oModel.getProperty(sPath + "/expanded");
            oModel.setProperty(sPath + "/expanded", !bExpanded);
        },

        onEmailLecturer(oEvent) {
            // Handle email lecturer action
            sap.m.MessageToast.show("Email lecturer functionality would be implemented here");
        }
    });
});
