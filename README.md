# @rethora/url-recipe-scraper

## About

A lightweight recipe scraper that parses recipe data from many popular recipe websites that use application ld json format by url or html.

## Install

```bash
npm install --save @rethora/url-recipe-scraper
```

## Usage

```js
import getRecipeData from '@rethora/url-recipe-scraper'

const url = 'https://example/recipes/creamy-courgette-potato-bake'

getRecipeData(url).then((recipe) => {
  console.log(recipe)
})
```

or with `async/await`

```js
import getRecipeData from '@rethora/url-recipe-scraper'

async function run() {
  const url = 'https://example/recipes/creamy-courgette-potato-bake'
  const recipe = await getRecipeData(url)
  console.log(recipe)
}
```

or with `html input`

```js
import getRecipeData from '@rethora/url-recipe-scraper'

const url = 'https://example/recipes/creamy-courgette-potato-bake'

const html = fetch(url).then((response) => response.text())

getRecipeData.then((recipe) => {
  console.log(recipe)
})
```

## Example Response

```json
{
  "@context": "http://schema.org",
  "@type": ["Recipe", "NewsArticle"],
  "headline": "The Best Grilled Chicken Breasts",
  "datePublished": "2024-05-21T08:00:00.000-04:00",
  "dateModified": "2024-05-23T15:44:56.427-04:00",
  "author": [
    {
      "@type": "Person",
      "name": "Nicole McLaughlin",
      "url": "https://www.allrecipes.com/author/nicole-mclaughlin/"
    }
  ],
  "description": "The best grilled chicken breasts you&#39;ll ever make begin with a basic marinade and end with the best technique for perfect cooking, complete with beautifully-executed grill marks.",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.allrecipes.com/thmb/wTdLRFJUyZKKlC1R7TLjmHOgI3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8648903_The-Perfect-Grilled-Chicken-Breasts_Dotdash-Meredith-Food-Studios_4x3-64f4be142d564b6f839339a16b6f59a2.jpg",
    "height": 1125,
    "width": 1500
  },
  "video": {
    "@type": "VideoObject",
    "contentUrl": "https://content.jwplatform.com/videos/HfglyCV1-K3AjnAEN.mp4",
    "description": "With Nicole’s help, you’re about to take your grilled dinner to an entirely different level. In this video, Nicole shows you the best ways to prepare and grill boneless-skinless chicken breasts. For the juiciest and tastiest chicken breasts, it all comes down to the marinade. Using her combination of salty, sweet, acidic, fatty, and seasoned ingredients to marinate the chicken, the results speak for themselves once you take the flavorful chicken breasts off of the grill.",
    "duration": "PT14M",
    "name": "How to Grill Chicken",
    "thumbnailUrl": "https://cdn.jwplayer.com/v2/media/HfglyCV1/thumbnails/GQ33b2R7.jpg",
    "uploadDate": "2024-05-23T15:44:10.881-04:00"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Allrecipes",
    "url": "https://www.allrecipes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.allrecipes.com/thmb/Z9lwz1y0B5aX-cemPiTgpn5YB0k=/112x112/filters:no_upscale():max_bytes(150000):strip_icc()/allrecipes_logo_schema-867c69d2999b439a9eba923a445ccfe3.png",
      "width": 112,
      "height": 112
    },
    "brand": "Allrecipes",
    "publishingPrinciples": "https://www.allrecipes.com/about-us-6648102#toc-editorial-guidelines",
    "sameAs": [
      "https://www.facebook.com/allrecipes",
      "https://www.instagram.com/allrecipes/",
      "https://www.pinterest.com/allrecipes/",
      "https://www.tiktok.com/@allrecipes",
      "https://www.youtube.com/user/allrecipes/videos",
      "https://twitter.com/Allrecipes",
      "https://flipboard.com/@Allrecipes",
      "https://en.wikipedia.org/wiki/Allrecipes.com",
      "http://linkedin.com/company/allrecipes.com"
    ]
  },
  "name": "The Best Grilled Chicken Breasts",
  "cookTime": "PT20M",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "406 kcal",
    "carbohydrateContent": "11 g",
    "cholesterolContent": "145 mg",
    "fiberContent": "1 g",
    "proteinContent": "54 g",
    "saturatedFatContent": "3 g",
    "sodiumContent": "1042 mg",
    "sugarContent": "9 g",
    "fatContent": "15 g",
    "unsaturatedFatContent": "0 g"
  },
  "prepTime": "PT10M",
  "recipeCategory": ["Dinner", "Entree"],
  "recipeCuisine": ["American"],
  "recipeIngredient": [
    "6 (6 ounce) skinless, boneless chicken breasts",
    "1/4 cup olive oil",
    "3 tablespoons Dijon mustard",
    "3 tablespoons honey",
    "2 tablespoons soy sauce",
    "2 tablespoon lemon juice",
    "3 cloves garlic, finely minced",
    "1 1/2 teaspoons onion powder",
    "1/2 teaspoon ground ginger",
    "Oil or Cooking Spray",
    "2 teaspoons kosher salt"
  ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Trim any excess fat from chicken. Place a piece of plastic or parchment on top of each chicken breast on a solid, level surface, and pound the thick end of chicken to flatten to an even thickness."
    },
    {
      "@type": "HowToStep",
      "text": "Place chicken in a large resealable plastic bag. Add olive oil, Dijon, honey, soy sauce, lemon juice, garlic, onion powder, and ginger to the bag.  Press any excess air out of the bag and seal the bag tightly. Massage chicken around in the bag until marinade is fully incorporated and chicken is well coated. Refrigerate for at least 4 hours or overnight, turning the bag occasionally."
    },
    {
      "@type": "HowToStep",
      "text": "Preheat an outdoor grill for high heat, about 400 degrees F (200 degrees C). Brush the grill grates with oil or coat with cooking spray. "
    },
    {
      "@type": "HowToStep",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://www.allrecipes.com/thmb/wTdLRFJUyZKKlC1R7TLjmHOgI3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8648903_The-Perfect-Grilled-Chicken-Breasts_Dotdash-Meredith-Food-Studios_4x3-64f4be142d564b6f839339a16b6f59a2.jpg"
        }
      ],
      "text": "Place chicken, top side down, on the grill. Sprinkle evenly with salt. Cook, undisturbed, until chicken easily releases from the grill and has dark brown grill marks, about 3 minutes. Reduce heat to 350 degrees F (175 degrees C) or medium heat, then flip and cook an additional 5 to 7 minutes or until chicken has reached an internal temperature of 165 degrees F (73 degrees C). Remove from heat and let stand 5 to 10 minutes before serving. "
    }
  ],
  "recipeYield": ["6"],
  "totalTime": "PT280M",
  "mainEntityOfPage": {
    "@type": ["WebPage"],
    "@id": "https://www.allrecipes.com/best-grilled-chicken-breasts-recipe-8648903",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://www.allrecipes.com/recipes/124/bbq-grilling/chicken/",
            "name": "Chicken"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://www.allrecipes.com/recipes/2838/bbq-grilling/chicken/chicken-breasts/",
            "name": "Chicken Breast"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://www.allrecipes.com/best-grilled-chicken-breasts-recipe-8648903",
            "name": "The Best Grilled Chicken Breasts"
          }
        }
      ]
    }
  }
}
```
