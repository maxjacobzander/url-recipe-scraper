interface Author {
    '@id': string | undefined;
    name: string | undefined;
    url: string | undefined;
}
interface ImageObject {
    url: string | undefined;
    height: number | undefined;
    width: number | undefined;
}
interface VideoObject {
    contentUrl: string | undefined;
    description: string | undefined;
    duration: string | undefined;
    name: string | undefined;
    thumbnailUrl: string | undefined;
    uploadDate: string | undefined;
}
interface NutritionInformation {
    calories: string | undefined;
    carbohydrateContent: string | undefined;
    cholesterolContent: string | undefined;
    fiberContent: string | undefined;
    proteinContent: string | undefined;
    saturatedFatContent: string | undefined;
    sodiumContent: string | undefined;
    sugarContent: string | undefined;
    fatContent: string | undefined;
    unsaturatedFatContent: string | undefined;
}
interface HowToStep {
    text: string | undefined;
    image: ImageObject[] | undefined;
}
interface HowToSection {
    name: string | undefined;
    itemListElement: HowToStep[] | undefined;
}
type RecipeInstruction = HowToStep | HowToSection;
interface Recipe {
    authors: Author[] | undefined;
    description: string | undefined;
    image: ImageObject | undefined;
    video: VideoObject | undefined;
    name: string | undefined;
    cookTime: string | undefined;
    prepTime: string | undefined;
    totalTime: string | undefined;
    nutrition: NutritionInformation | undefined;
    recipeCategory: (string | undefined)[] | undefined;
    recipeCuisine: (string | undefined)[] | undefined;
    recipeIngredient: (string | undefined)[] | undefined;
    recipeInstructions: RecipeInstruction[] | undefined;
    recipeYield: (string | undefined)[] | undefined;
}

/**
 * Retrieves recipe data from a given URL.
 * @param input - The URL or HTML to fetch recipe data from.
 * @param config - Optional configuration for the fetch request.
 * @returns A promise that resolves to the recipe data.
 * @throws An error if no script tags or application/ld+json tags are found, or if no recipe data is found.
 */
declare function getRecipeData(input: string, config?: RequestInit): Promise<Recipe>;

export { type Author, type HowToSection, type HowToStep, type ImageObject, type NutritionInformation, type Recipe, type RecipeInstruction, type VideoObject, getRecipeData as default };
