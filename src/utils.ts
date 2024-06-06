import {
  SchemaAuthor,
  SchemaHowToSection,
  SchemaHowToStep,
  SchemaImageObject,
  SchemaNutritionInformation,
  SchemaRecipe,
  SchemaVideoObject,
} from 'schemaTypes'
import {
  Author,
  ImageObject,
  NutritionInformation,
  Recipe,
  RecipeInstruction,
  VideoObject,
} from './types'

export const validateUrl = (input: string) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlRegex.test(input)
}

export const validateHtml = (input: string) => {
  const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>[\s\S]*?<\/\1>/gi
  return htmlRegex.test(input)
}

export const getScriptTags = (html: string) => {
  const scriptTags = html.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)
  return scriptTags || []
}

export const getApplicationLdJsonTags = (tags: string[]) => {
  const applicationLdJsonTags = tags.filter((tag) =>
    tag.includes('application/ld+json')
  )
  return applicationLdJsonTags
}

export const parseTagData = (tags: string[]) => {
  const schemaData = tags.map((tag) => {
    const data = tag.match(/{[^]*}/)
    return data ? JSON.parse(data[0]) : {}
  })
  return schemaData
}

export const getRecipeSchemaData = (schemaData: any[]) => {
  let recipeSchema: Recipe | null = null

  schemaData.forEach((data) => {
    if (data['@graph']) {
      data['@graph'].forEach((graph: any) => {
        if (graph['@type'] === 'Recipe') {
          recipeSchema = graph
        }
      })
    }

    if (Array.isArray(data['@type'])) {
      if (data['@type'].includes('Recipe')) {
        recipeSchema = data
      }
    }

    if (data['@type'] === 'Recipe') {
      recipeSchema = data
    }
  })

  return recipeSchema ? (recipeSchema as SchemaRecipe) : null
}

const formatString = (str: string | undefined): string | undefined =>
  str?.trim() ?? undefined

const formatStringOrArray = (input: string | string[] | undefined) => {
  if (!input) return undefined

  if (Array.isArray(input)) {
    return input.map((str) => formatString(str))
  }

  return [formatString(input)]
}

const getAuthors = (
  schemaAuthors: SchemaAuthor | SchemaAuthor[] | undefined
): Author[] | undefined => {
  if (!schemaAuthors) return undefined

  if (Array.isArray(schemaAuthors)) {
    return schemaAuthors.map((author) => ({
      '@id': author['@id'],
      name: formatString(author.name),
      url: author.url,
    }))
  }

  return [
    {
      '@id': schemaAuthors['@id'],
      name: formatString(schemaAuthors.name),
      url: schemaAuthors.url,
    },
  ]
}

const getImage = (
  schemaImage: SchemaImageObject | undefined
): ImageObject | undefined => {
  if (!schemaImage) return undefined

  return {
    url: schemaImage.url,
    height: schemaImage.height,
    width: schemaImage.width ?? -1,
  }
}

const getVideo = (
  schemaVideo: SchemaVideoObject | undefined
): VideoObject | undefined => {
  if (!schemaVideo) return undefined

  return {
    contentUrl: schemaVideo.contentUrl,
    description: schemaVideo.description,
    duration: schemaVideo.duration,
    name: schemaVideo.name,
    thumbnailUrl: schemaVideo.thumbnailUrl,
    uploadDate: schemaVideo.uploadDate,
  }
}

const getNutrition = (
  schemaNutrition: SchemaNutritionInformation | undefined
): NutritionInformation | undefined => {
  if (!schemaNutrition) return undefined

  return {
    calories: schemaNutrition.calories,
    carbohydrateContent: schemaNutrition.carbohydrateContent,
    cholesterolContent: schemaNutrition.cholesterolContent,
    fiberContent: schemaNutrition.fiberContent,
    proteinContent: schemaNutrition.proteinContent,
    saturatedFatContent: schemaNutrition.saturatedFatContent,
    sodiumContent: schemaNutrition.sodiumContent,
    sugarContent: schemaNutrition.sugarContent,
    fatContent: schemaNutrition.fatContent,
    unsaturatedFatContent: schemaNutrition.unsaturatedFatContent,
  }
}

const getInstructions = (
  schemaInstructions: SchemaHowToStep[] | SchemaHowToSection[] | undefined
): RecipeInstruction[] | undefined => {
  if (!schemaInstructions) return undefined

  const instructions = schemaInstructions.map((instruction) => {
    if ((instruction as SchemaHowToStep).text) {
      const step = instruction as SchemaHowToStep
      return {
        text: formatString(step.text),
        image: step.image?.map((img) => ({
          url: img.url,
          height: img.height,
          width: img.width,
        })),
      }
    }

    const section = instruction as SchemaHowToSection
    return {
      name: formatString(section.name),
      itemListElement: section.itemListElement?.map((step) => ({
        text: formatString(step.text),
        image: step.image?.map((img) => ({
          url: img.url,
          height: img.height,
          width: img.width,
        })),
      })),
    }
  })

  return instructions
}

export const formatRecipeData = (schemaRecipeData: SchemaRecipe): Recipe => ({
  authors: getAuthors(schemaRecipeData.author),
  description: formatString(schemaRecipeData.description),
  image: getImage(schemaRecipeData.image),
  video: getVideo(schemaRecipeData.video),
  name: formatString(schemaRecipeData.name),
  nutrition: getNutrition(schemaRecipeData.nutrition),
  recipeCategory: formatStringOrArray(schemaRecipeData.recipeCategory),
  recipeCuisine: formatStringOrArray(schemaRecipeData.recipeCuisine),
  recipeIngredient: formatStringOrArray(schemaRecipeData.recipeIngredient),
  recipeInstructions: getInstructions(schemaRecipeData.recipeInstructions),
  recipeYield: formatStringOrArray(schemaRecipeData.recipeYield),
  cookTime: schemaRecipeData.cookTime,
  prepTime: schemaRecipeData.prepTime,
  totalTime: schemaRecipeData.totalTime,
})
