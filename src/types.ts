export interface Author {
  '@id': string | undefined
  name: string | undefined
  url: string | undefined
}

export interface ImageObject {
  url: string | undefined
  height: number | undefined
  width: number | undefined
}

export interface VideoObject {
  contentUrl: string | undefined
  description: string | undefined
  duration: string | undefined
  name: string | undefined
  thumbnailUrl: string | undefined
  uploadDate: string | undefined
}

export interface NutritionInformation {
  calories: string | undefined
  carbohydrateContent: string | undefined
  cholesterolContent: string | undefined
  fiberContent: string | undefined
  proteinContent: string | undefined
  saturatedFatContent: string | undefined
  sodiumContent: string | undefined
  sugarContent: string | undefined
  fatContent: string | undefined
  unsaturatedFatContent: string | undefined
}

export interface HowToStep {
  text: string | undefined
  image: ImageObject[] | undefined
}

export interface HowToSection {
  name: string | undefined
  itemListElement: HowToStep[] | undefined
}

export type RecipeInstruction = HowToStep | HowToSection

export interface Recipe {
  authors: Author[] | undefined
  description: string | undefined
  image: ImageObject | undefined
  video: VideoObject | undefined
  name: string | undefined
  cookTime: string | undefined
  prepTime: string | undefined
  totalTime: string | undefined
  nutrition: NutritionInformation | undefined
  recipeCategory: (string | undefined)[] | undefined
  recipeCuisine: (string | undefined)[] | undefined
  recipeIngredient: (string | undefined)[] | undefined
  recipeInstructions: RecipeInstruction[] | undefined
  recipeYield: (string | undefined)[] | undefined
}
