import {
  getApplicationLdJsonTags,
  getRecipeSchemaData,
  getScriptTags,
  parseTagData,
  validateHtml,
  validateUrl,
} from './utils'

/**
 * Retrieves recipe data from a given URL.
 * @param input - The URL or HTML to fetch recipe data from.
 * @param config - Optional configuration for the fetch request.
 * @returns A promise that resolves to the recipe data.
 * @throws An error if no script tags or application/ld+json tags are found, or if no recipe data is found.
 */
export default async function getRecipeData(
  input: string,
  config: RequestInit = {}
) {
  let html: string | null = null

  const validHtml = validateHtml(input)
  if (validHtml) html = input

  const validUrl = validateUrl(input)
  if (validUrl) {
    const response = await fetch(input, config)
    html = await response.text()
  }

  if (!html) throw new Error('Invalid input')

  const tags = getScriptTags(html)
  if (tags.length === 0) throw new Error('No script tags found')

  const applicationLdJsonTags = getApplicationLdJsonTags(tags)
  if (applicationLdJsonTags.length === 0)
    throw new Error('No application/ld+json tags found')

  const parsedTagData = parseTagData(applicationLdJsonTags)
  const recipeData = getRecipeSchemaData(parsedTagData)

  if (!recipeData) throw new Error('No recipe data found')

  return recipeData
}

export * from './types'
