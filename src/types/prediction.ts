export interface Prediction {
  predictionID?: string;
  userID?: string;
  subject?: string;
  predictedGrade: number;
  predictedKnowledgeLevel: number;
  predictionDate?: string;
}
