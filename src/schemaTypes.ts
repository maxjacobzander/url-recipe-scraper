export interface TypeObject {
  '@type': string
}

export interface TypeListObject {
  '@type': string[]
}

export interface SchemaAuthor extends TypeObject {
  '@id'?: string
  name?: string
  url?: string
}

export interface SchemaImageObject extends TypeObject {
  url?: string
  height?: number
  width?: number
}

export interface SchemaVideoObject extends TypeObject {
  contentUrl?: string
  description?: string
  duration?: string
  name?: string
  thumbnailUrl?: string
  uploadDate?: string
}

export interface SchemaLogo extends TypeObject {
  url?: string
  width?: number
  height?: number
}

export interface SchemaPublisher extends TypeObject {
  name?: string
  url?: string
  logo?: SchemaLogo
  brand?: string
  publishingPrinciples?: string
  sameAs?: string[]
}

export interface SchemaNutritionInformation extends TypeObject {
  calories?: string
  carbohydrateContent?: string
  cholesterolContent?: string
  fiberContent?: string
  proteinContent?: string
  saturatedFatContent?: string
  sodiumContent?: string
  sugarContent?: string
  fatContent?: string
  unsaturatedFatContent?: string
}

export interface SchemaHowToStep extends TypeObject {
  image?: SchemaImageObject[]
  text?: string
  name?: string
  url?: string
}

export interface SchemaHowToSection extends TypeObject {
  name?: string
  itemListElement?: SchemaHowToStep[]
}

export interface SchemaRecipe extends TypeListObject {
  '@context'?: string
  headline?: string
  datePublished?: string
  dateModified?: string
  author?: SchemaAuthor | SchemaAuthor[]
  description?: string
  image?: SchemaImageObject
  video?: SchemaVideoObject
  publisher?: SchemaPublisher
  name?: string
  cookTime?: string
  nutrition?: SchemaNutritionInformation
  prepTime?: string
  recipeCategory?: string | string[]
  recipeCuisine?: string | string[]
  recipeIngredient?: string | string[]
  recipeInstructions?: SchemaHowToStep[] | SchemaHowToSection[]
  recipeYield?: string | string[]
  totalTime?: string
}
