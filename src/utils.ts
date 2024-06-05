import { Recipe } from './types'

export const validateUrl = (url: string) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlRegex.test(url)
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

  return recipeSchema ? (recipeSchema as Recipe) : null
}
