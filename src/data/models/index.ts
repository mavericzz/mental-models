import type { MentalModel } from "../../types/models";
import { financeModels } from "./finance";
import { healthModels } from "./health";
import { relationshipModels } from "./relationships";
import { careerModels } from "./career";
import { psychologyModels } from "./psychology";
import { negotiationModels } from "./negotiation";
import { creativityModels } from "./creativity";
import { learningModels } from "./learning";
import { timeManagementModels } from "./time-management";
import { communicationModels } from "./communication";
import { scienceThinkingModels } from "./science-thinking";
import { systemsThinkingModels } from "./systems-thinking";
import { probabilityModels } from "./probability";
import { leadershipModels } from "./leadership";
import { habitsModels } from "./habits";

const allModelsArray: MentalModel[] = [
  ...financeModels,
  ...healthModels,
  ...relationshipModels,
  ...careerModels,
  ...psychologyModels,
  ...negotiationModels,
  ...creativityModels,
  ...learningModels,
  ...timeManagementModels,
  ...communicationModels,
  ...scienceThinkingModels,
  ...systemsThinkingModels,
  ...probabilityModels,
  ...leadershipModels,
  ...habitsModels,
];

const modelMap = new Map<string, MentalModel>();
allModelsArray.forEach((model) => modelMap.set(model.id, model));

const categoryMap = new Map<string, MentalModel[]>();
allModelsArray.forEach((model) => {
  const existing = categoryMap.get(model.categoryId) || [];
  existing.push(model);
  categoryMap.set(model.categoryId, existing);
});

export function getAllModels(): MentalModel[] {
  return allModelsArray;
}

export function getModelById(id: string): MentalModel | undefined {
  return modelMap.get(id);
}

export function getModelsByCategory(categoryId: string): MentalModel[] {
  return categoryMap.get(categoryId) || [];
}

export function getModelCount(): number {
  return allModelsArray.length;
}
