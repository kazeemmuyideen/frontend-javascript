// Branded interfaces for nominal typing
interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits";
}

// Add two MajorCredits numbers
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

// Add two MinorCredits numbers
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}
