"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
// Add two MajorCredits numbers
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "MajorCredits",
    };
}
exports.sumMajorCredits = sumMajorCredits;
// Add two MinorCredits numbers
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "MinorCredits",
    };
}
exports.sumMinorCredits = sumMinorCredits;
