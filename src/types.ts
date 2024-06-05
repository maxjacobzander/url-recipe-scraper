export interface Author {
  '@type': string
  name: string
  url: string
}

export interface ImageObject {
  '@type': string
  url: string
  height: number
  width: number
}

export interface VideoObject {
  '@type': string
  contentUrl: string
  description: string
  duration: string
  name: string
  thumbnailUrl: string
  uploadDate: string
}

export interface Logo {
  '@type': string
  url: string
  width: number
  height: number
}

export interface Publisher {
  '@type': string
  name: string
  url: string
  logo: Logo
  brand: string
  publishingPrinciples: string
  sameAs: string[]
}

export interface NutritionInformation {
  '@type': string
  calories: string
  carbohydrateContent: string
  cholesterolContent: string
  fiberContent: string
  proteinContent: string
  saturatedFatContent: string
  sodiumContent: string
  sugarContent: string
  fatContent: string
  unsaturatedFatContent: string
}

export interface HowToStep {
  '@type': string
  text: string
  image?: ImageObject[]
}

export interface Item {
  '@id': string
  name: string
}

export interface ListItem {
  '@type': string
  position: number
  item: Item
}

export interface BreadcrumbList {
  '@type': string
  itemListElement: ListItem[]
}

export interface MainEntityOfPage {
  '@type': string[]
  '@id': string
  breadcrumb: BreadcrumbList
}

export interface Recipe {
  '@context': string
  '@type': string[]
  headline: string
  datePublished: string
  dateModified: string
  author: Author[]
  description: string
  image: ImageObject
  video: VideoObject
  publisher: Publisher
  name: string
  cookTime: string
  nutrition: NutritionInformation
  prepTime: string
  recipeCategory: string[]
  recipeCuisine: string[]
  recipeIngredient: string[]
  recipeInstructions: HowToStep[]
  recipeYield: string[]
  totalTime: string
  mainEntityOfPage: MainEntityOfPage
}
