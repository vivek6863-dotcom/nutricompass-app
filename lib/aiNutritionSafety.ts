export type SafetyResult = {
  isSafe: boolean;
  response?: string;
};

const medicalPatterns = [
  /\bdiagnos(e|is|ed|ing)\b/i,
  /\bdo i have\b.*\b(anemia|diabetes|cancer|disease|condition)\b/i,

  /\bwhat medicine\b/i,
  /\bwhich medicine\b/i,
  /\bwhat medication\b/i,
  /\bwhich medication\b/i,

  /\bmedicine dosage\b/i,
  /\bmedication dosage\b/i,
  /\bhow much medicine\b/i,
  /\bhow much medication\b/i,
  /\bhow many tablets\b/i,
  /\bwhat dose\b/i,
  /\bwhat dosage\b/i,

  /\bshould i stop\b.*\bmedicine\b/i,
  /\bshould i stop\b.*\bmedication\b/i,
  /\bchange my medication\b/i,
  /\bstop taking\b.*\bmedicine\b/i,
  /\bstop taking\b.*\bmedication\b/i,

  /\bprescribe\b/i,
  /\bprescription\b/i,

  /\bwhat treatment\b/i,
  /\bmedical treatment\b/i,
  /\btreat my\b/i,
  /\bcure my\b/i,
];

export function checkNutritionQuestion(
  question: string
): SafetyResult {
  const normalizedQuestion = question.trim();

  if (!normalizedQuestion) {
    return {
      isSafe: false,
      response: "Please enter a nutrition question.",
    };
  }

  const isMedicalRequest = medicalPatterns.some((pattern) =>
    pattern.test(normalizedQuestion)
  );

  if (!isMedicalRequest) {
    return {
      isSafe: true,
    };
  }

  return {
    isSafe: false,
    response:
      "I can provide general nutrition information about foods, nutrients, healthy eating, and meal ideas, but I can't diagnose medical conditions, prescribe medicines, recommend medication dosages, or tell you to start, stop, or change medical treatment. For personalized medical advice, please speak with a qualified healthcare professional.",
  };
}