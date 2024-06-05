import {
  getApplicationLdJsonTags,
  getRecipeSchemaData,
  getScriptTags,
  parseTagData,
  validateUrl,
} from './utils'

/**
 * Retrieves recipe data from a given URL.
 * @param url - The URL of the webpage to scrape recipe data from.
 * @param config - Optional configuration for the fetch request.
 * @returns A promise that resolves to the recipe data.
 * @throws An error if no script tags or application/ld+json tags are found, or if no recipe data is found.
 */
export default async function getRecipeData(
  url: string,
  config: RequestInit = {}
) {
  const validUrl = validateUrl(url)
  if (!validUrl) throw new Error('Invalid URL')

  const response = await fetch(url, config)
  const html = await response.text()

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
