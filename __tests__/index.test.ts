import getRecipeData from '../src/index'

describe('getRecipeData', () => {
  test('www.allrecipes.com', async () => {
    const url =
      'https://www.allrecipes.com/best-grilled-chicken-breasts-recipe-8648903'

    const recipe = await getRecipeData(url)

    expect(recipe).toStrictEqual({
      '@context': 'http://schema.org',
      '@type': ['Recipe', 'NewsArticle'],
      headline: 'The Best Grilled Chicken Breasts',
      datePublished: '2024-05-21T08:00:00.000-04:00',
      dateModified: '2024-05-23T15:44:56.427-04:00',
      author: [
        {
          '@type': 'Person',
          name: 'Nicole McLaughlin',
          url: 'https://www.allrecipes.com/author/nicole-mclaughlin/',
        },
      ],
      description:
        'The best grilled chicken breasts you&#39;ll ever make begin with a basic marinade and end with the best technique for perfect cooking, complete with beautifully-executed grill marks.',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.allrecipes.com/thmb/wTdLRFJUyZKKlC1R7TLjmHOgI3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8648903_The-Perfect-Grilled-Chicken-Breasts_Dotdash-Meredith-Food-Studios_4x3-64f4be142d564b6f839339a16b6f59a2.jpg',
        height: 1125,
        width: 1500,
      },
      video: {
        '@type': 'VideoObject',
        contentUrl:
          'https://content.jwplatform.com/videos/HfglyCV1-K3AjnAEN.mp4',
        description:
          'With Nicole’s help, you’re about to take your grilled dinner to an entirely different level. In this video, Nicole shows you the best ways to prepare and grill boneless-skinless chicken breasts. For the juiciest and tastiest chicken breasts, it all comes down to the marinade. Using her combination of salty, sweet, acidic, fatty, and seasoned ingredients to marinate the chicken, the results speak for themselves once you take the flavorful chicken breasts off of the grill.',
        duration: 'PT14M',
        name: 'How to Grill Chicken',
        thumbnailUrl:
          'https://cdn.jwplayer.com/v2/media/HfglyCV1/thumbnails/GQ33b2R7.jpg',
        uploadDate: '2024-05-23T15:44:10.881-04:00',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Allrecipes',
        url: 'https://www.allrecipes.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.allrecipes.com/thmb/Z9lwz1y0B5aX-cemPiTgpn5YB0k=/112x112/filters:no_upscale():max_bytes(150000):strip_icc()/allrecipes_logo_schema-867c69d2999b439a9eba923a445ccfe3.png',
          width: 112,
          height: 112,
        },
        brand: 'Allrecipes',
        publishingPrinciples:
          'https://www.allrecipes.com/about-us-6648102#toc-editorial-guidelines',
        sameAs: [
          'https://www.facebook.com/allrecipes',
          'https://www.instagram.com/allrecipes/',
          'https://www.pinterest.com/allrecipes/',
          'https://www.tiktok.com/@allrecipes',
          'https://www.youtube.com/user/allrecipes/videos',
          'https://twitter.com/Allrecipes',
          'https://flipboard.com/@Allrecipes',
          'https://en.wikipedia.org/wiki/Allrecipes.com',
          'http://linkedin.com/company/allrecipes.com',
        ],
      },
      name: 'The Best Grilled Chicken Breasts',
      cookTime: 'PT20M',
      nutrition: {
        '@type': 'NutritionInformation',
        calories: '406 kcal',
        carbohydrateContent: '11 g',
        cholesterolContent: '145 mg',
        fiberContent: '1 g',
        proteinContent: '54 g',
        saturatedFatContent: '3 g',
        sodiumContent: '1042 mg',
        sugarContent: '9 g',
        fatContent: '15 g',
        unsaturatedFatContent: '0 g',
      },
      prepTime: 'PT10M',
      recipeCategory: ['Dinner', 'Entree'],
      recipeCuisine: ['American'],
      recipeIngredient: [
        '6 (6 ounce) skinless, boneless chicken breasts',
        '1/4 cup olive oil',
        '3 tablespoons Dijon mustard',
        '3 tablespoons honey',
        '2 tablespoons soy sauce',
        '2 tablespoon lemon juice',
        '3 cloves garlic, finely minced',
        '1 1/2 teaspoons onion powder',
        '1/2 teaspoon ground ginger',
        'Oil or Cooking Spray',
        '2 teaspoons kosher salt',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          text: 'Trim any excess fat from chicken. Place a piece of plastic or parchment on top of each chicken breast on a solid, level surface, and pound the thick end of chicken to flatten to an even thickness.',
        },
        {
          '@type': 'HowToStep',
          text: 'Place chicken in a large resealable plastic bag. Add olive oil, Dijon, honey, soy sauce, lemon juice, garlic, onion powder, and ginger to the bag.  Press any excess air out of the bag and seal the bag tightly. Massage chicken around in the bag until marinade is fully incorporated and chicken is well coated. Refrigerate for at least 4 hours or overnight, turning the bag occasionally.',
        },
        {
          '@type': 'HowToStep',
          text: 'Preheat an outdoor grill for high heat, about 400 degrees F (200 degrees C). Brush the grill grates with oil or coat with cooking spray. ',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.allrecipes.com/thmb/wTdLRFJUyZKKlC1R7TLjmHOgI3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8648903_The-Perfect-Grilled-Chicken-Breasts_Dotdash-Meredith-Food-Studios_4x3-64f4be142d564b6f839339a16b6f59a2.jpg',
            },
          ],
          text: 'Place chicken, top side down, on the grill. Sprinkle evenly with salt. Cook, undisturbed, until chicken easily releases from the grill and has dark brown grill marks, about 3 minutes. Reduce heat to 350 degrees F (175 degrees C) or medium heat, then flip and cook an additional 5 to 7 minutes or until chicken has reached an internal temperature of 165 degrees F (73 degrees C). Remove from heat and let stand 5 to 10 minutes before serving. ',
        },
      ],
      recipeYield: ['6'],
      totalTime: 'PT280M',
      mainEntityOfPage: {
        '@type': ['WebPage'],
        '@id':
          'https://www.allrecipes.com/best-grilled-chicken-breasts-recipe-8648903',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id':
                  'https://www.allrecipes.com/recipes/124/bbq-grilling/chicken/',
                name: 'Chicken',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id':
                  'https://www.allrecipes.com/recipes/2838/bbq-grilling/chicken/chicken-breasts/',
                name: 'Chicken Breast',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id':
                  'https://www.allrecipes.com/best-grilled-chicken-breasts-recipe-8648903',
                name: 'The Best Grilled Chicken Breasts',
              },
            },
          ],
        },
      },
    })
  })

  test('www.simplyrecipes.com', async () => {
    const url = 'https://www.simplyrecipes.com/recipes/italian_meatballs/'

    const recipe = await getRecipeData(url)
    expect(recipe).toStrictEqual({
      '@context': 'http://schema.org',
      '@type': ['Recipe'],
      headline: 'Italian Meatballs',
      datePublished: '2020-02-14T07:37:55.000-05:00',
      dateModified: '2024-03-28T09:16:52.273-04:00',
      author: [
        {
          '@type': 'Person',
          name: 'Elise Bauer',
          url: 'https://www.simplyrecipes.com/elise-bauer-5091824',
        },
      ],
      description:
        'These classic Italian-American style meatballs are made with ground beef and pork, loaded with herbs and cheese, and served with a traditional tomato sauce. Make them large for a dinner entree or roll them smaller for an appetizer.',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.simplyrecipes.com/thmb/kO2yxG-lT4gNjwLAREAbrspEsgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__italian-meatballs-horiz-c-1800-e83b24e913364fd6b867805335961d65.jpg',
        height: 1000,
        width: 1500,
      },
      video: {
        '@type': 'VideoObject',
        contentUrl:
          'https://content.jwplatform.com/videos/Aph2PJLq-px9BSfP1.mp4',
        description:
          "Our Italian meatballs are tender, and loaded with herbs and cheese. The simple meal benefits from the flavors of ground beef and pork, before it's covered with a classic tomato sauce. In this video, you'll learn helpful tips and tricks to make this easy, delicious, and satisfying dish. Start the family recipe off by soaking bread in hot milk, before combining with a mixture including ricotta and Parmesan cheeses, spices, and eggs. Store the quick dinner option in the freezer or the fridge.",
        duration: 'PT1M39S',
        name: 'How to Make Easy Italian Meatballs',
        thumbnailUrl:
          'https://cdn.jwplayer.com/v2/media/Aph2PJLq/poster.jpg?width=720',
        uploadDate: '2021-04-27T15:29:27.877-04:00',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Simply Recipes',
        url: 'https://www.simplyrecipes.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.simplyrecipes.com/thmb/QvixEwCD02s_lnkgkVb6mHwKS7c=/1125x320/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipesLogoTransparent-07a297c54b2142ae9c079abb2f0fa639.png',
          width: 1125,
          height: 320,
        },
        brand: 'Simply Recipes',
        publishingPrinciples:
          'https://www.simplyrecipes.com/about-us-5096129#toc-editorial-guidelines',
        sameAs: [
          'https://www.facebook.com/simplyrecipes',
          'https://www.instagram.com/simplyrecipes',
          'https://www.pinterest.com/simplyrecipes',
        ],
      },
      name: 'Italian Meatballs',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '51',
      },
      cookTime: 'PT60M',
      keywords:
        'Comfort Food, Freezer-friendly, Restaurant Favorite, Italian, Meatballs, Dinner, Christmas, Favorite Fall, Favorite Winter',
      nutrition: {
        '@type': 'NutritionInformation',
        calories: '577 kcal',
        carbohydrateContent: '25 g',
        cholesterolContent: '157 mg',
        fiberContent: '4 g',
        proteinContent: '38 g',
        saturatedFatContent: '11 g',
        sodiumContent: '831 mg',
        sugarContent: '8 g',
        fatContent: '36 g',
        servingSize: 'Makes about 16 meatballs. Serves 8',
        unsaturatedFatContent: '0 g',
      },
      prepTime: 'PT25M',
      recipeCategory: [
        'Dinner',
        'Appetizer',
        'Comfort Food',
        'Freezer-friendly',
        'Restaurant Favorite',
        'Italian',
        'Meatballs',
      ],
      recipeCuisine: ['Italian'],
      recipeIngredient: [
        'For the meatballs:',
        '1 pound ground beef (at least 16 percent fat)',
        '1 pound ground pork',
        '2/3 cup milk (whole or 2 percent)',
        '3 slices of white bread, crusts removed (about 3 ounces)',
        '1/4 cup ricotta cheese',
        '1/4 cup grated Parmesan or Romano cheese',
        '2 large eggs',
        '1 teaspoon salt (or 2 teaspoons of kosher salt)',
        '1 tablespoon chopped fresh parsley',
        '2 teaspoons black pepper',
        '1 teaspoon dried oregano or marjoram',
        '2-3 garlic cloves, minced',
        'About 1 cup flour, for dusting',
        '1/3 cup extra virgin olive oil',
        '2 1/2 cups (24 ounces) tomato sauce (recipe follows, or use already prepared)',
        'Tomato Sauce:',
        '2 tablespoons extra virgin olive oil',
        '3/4 cup finely chopped onions',
        '3/4 cup finely chopped carrots',
        '3/4 cup finely chopped celery',
        '2 tablespoons chopped fresh parsley',
        '1 clove garlic, minced',
        '1 28-oz can crushed or whole tomatoes, including the juice, or 1 3/4 pound of fresh tomatoes, peeled, seeded, and chopped',
        '1/2 teaspoon dried basil or 2 Tbsp chopped fresh basil',
        '1 teaspoon tomato paste',
        'Salt and freshly ground black pepper to taste',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/ilRXdplBwJDqzY_PhoUquPS-6N4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094057__italian-meatballs-method-1-538bcdfe18c24cb6bfe1314b73c988d6.jpg',
            },
          ],
          text: 'Make the tomato sauce: Heat the olive oil in a large skillet on medium heat. Add the onion, carrots, celery, and parsley. Stir to coat with the oil, reduce the heat to low, and cover the pan. Cook until the vegetables are soft and cooked through, 15 to 20 minutes. Remove the cover, add the garlic, and increase the heat to medium-high. Cook the garlic for half a minute, then add the tomatoes (if using whole canned tomatoes, break up with your fingers as you add them to the pan). Add the basil and tomato paste. Season with salt and pepper. Bring to a low simmer, reduce the heat to low, and let cook uncovered until thickened while you prepare the meatballs, 15 to 30 minutes. Purée in a blender, or push through a food mill if you&#39;d like a smooth consistency. Return to the pan and adjust the seasonings.',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/FZWoyd-On6t_gIM2pFqNOBoSG2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094055__italian-meatballs-method-3-1bf4fefd6d2d4c66b8326bf1397d78d9.jpg',
            },
          ],
          text: 'Soak the torn bread in hot milk: To make the meatballs, heat the milk in a small pot until steamy. Turn off the heat, tear the bread into little pieces and soak it in the milk until it partially dissolves. Mash it until you get something that resembles a paste. Turn it out onto a plate to let it cool.',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/UkDTaY5OmMirlBcZGohxPTZURZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094052__italian-meatballs-method-5-670d8c8e43c1428b9317a42ddb4d9644.jpg',
            },
          ],
          text: 'Make the meatball mixture: In a large bowl, combine the beef, pork, ricotta cheese, grated Parmesan, eggs, garlic, parsley, oregano, salt, pepper, and the bread-milk mixture. Mix it well with your hands until it barely combines. Don&#39;t overwork the mixture or it will become tough. It is OK to have some discernible bits of bread or meat in the mix; better that than overworked meatballs.',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/hn7iFjJKcimfDZqiHerCoxPhfeg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094049__italian-meatballs-method-7-6b4aa4d82827425b9516cbd7fcd0a12e.jpg',
            },
          ],
          text: 'Form the meatballs: Wet your hands and form the meatballs. A traditional size for this sort of meatball is 2 to 3 inches across, but you can make them any size you want. Once you roll the meatball in your hands, roll it in the flour to give it a good coating. Set each one on a baking sheet as you work. You might need to rinse your hands a few times as you make the meatballs.',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/HZLQdkqnz7rJ6ocUpvBiL30tOuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094046__italian-meatballs-method-9-a4f12909d9a04fb39f59af99fa24e0b3.jpg',
            },
          ],
          text: 'Brown the meatballs: When all the meatballs are formed, heat the olive oil in a large skillet over medium-high heat. Brown the meatballs on at least 2 sides. Don&#39;t worry about the center getting cooked through, as you will finish these in the sauce.',
        },
        {
          '@type': 'HowToStep',
          image: [
            {
              '@type': 'ImageObject',
              url: 'https://www.simplyrecipes.com/thmb/-TrKXHs2YdVKXEAwYkNqU-3nACE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__11__07094044__italian-meatballs-method-11-12fad0b1dc304b80b01a0ca94149badf.jpg',
            },
          ],
          text: 'Finish cooking the meatballs in tomato sauce: Once all the meatballs are browned, arrange them in the sauce, turning each one over in the sauce to coat. Cover the pot and simmer gently for 15 to 20 minutes. Serve with the sauce and pasta or crusty bread. Sprinkle with a little chopped parsley for garnish if you want. Did you love the recipe? Give us some stars and leave a comment below!',
        },
      ],
      recipeYield: ['8', '16 meatballs'],
      totalTime: 'PT85M',
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Carol Meyer',
          },
          reviewBody:
            'Just made these meatballs for company and they had no taste. Very Disappointed.',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Dottie Woods',
          },
          reviewBody:
            'Very good recipes. I always oven bake my meatballs. In the store we did not use pork nor ricotta in the meatballs. But that does give great flavor. My parents had a pizzeria in NY in the 60’s and made their own sauce too. They used the carrots & celery done in a pressure cooker first. Sauce was put thru a mulli to smooth out the pulp. We also made our own sausage. My Dad was the Italian. I learned so much. I have an Italian friend from NJ and she puts those large baking raisins in her meatballs for moisture. Ever hear of that idea? It works well. Thanks for sharing.',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          author: {
            '@type': 'Person',
            name: 'David McLean',
          },
          reviewBody:
            "I've made these meatball quite a few times now thought I'd better put a review Yes there a winner every one love's then can't go wrong with this recipe Thank you so much it Elise cheers Dave .",
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '3',
          },
          author: {
            '@type': 'Person',
            name: 'Mickiememo',
          },
          reviewBody:
            'I came out with 19 3oz meatballs. I know the pic is an example of finishing in sauce, but not enough sauce for the amount of protein.',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Jenna Eck Kranzberg',
          },
          reviewBody:
            'These turned out amazing!!! My family devoured them. I probably made them a bit bigger but oh my goodness so tasty. Wish I could send you a pic!',
        },
      ],
      mainEntityOfPage: {
        '@type': ['WebPage'],
        '@id': 'https://www.simplyrecipes.com/recipes/italian_meatballs/',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://www.simplyrecipes.com/beef-recipes-5091171',
                name: 'Beef',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id':
                  'https://www.simplyrecipes.com/ground-beef-recipes-5091164',
                name: 'Ground Beef',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id':
                  'https://www.simplyrecipes.com/recipes/italian_meatballs/',
                name: 'Italian Meatballs',
              },
            },
          ],
        },
      },
      about: [],
    })
  })

  test('www.epicurious.com', async () => {
    const url =
      'https://www.epicurious.com/recipes/food/views/ba-syn-radishes-with-sesame-yogurt'

    const recipe = await getRecipeData(url)

    expect(recipe).toStrictEqual({
      '@context': 'http://schema.org',
      '@type': 'Recipe',
      articleBody:
        'A small drizzle of toasted sesame oil stirred into yogurt infuses it with a smoky earthiness that contrasts wonderfully with crisp, juicy radishes. Toasting your own sesame seeds brings out all of their glorious campfire aromas; toss them constantly in a dry skillet until deep golden brown like a chocolate chip cookie.',
      alternativeHeadline:
        'The classic pairing of radishes and butter inspires this version featuring creamy yogurt flavored with toasted sesame seeds and sesame oil.',
      keywords: [
        'snack',
        'vegetarian',
        'nut free',
        'gluten free',
        'easy',
        'quick',
        '30 minutes or less',
        'radish',
        'yogurt',
        'summer',
        'bon appétit',
        'digital_syndication',
      ],
      thumbnailUrl:
        'https://assets.epicurious.com/photos/664c62afdfb9ebe92fd7ba3b/2:3/w_3668,h_5502,c_limit/240403_BON_APPETIT_SIMPLE_SUMMER_COOKING_PEDENMUNK_RADISH_3778.jpg',
      publisher: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Epicurious',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.epicurious.com/verso/static/epicurious/assets/logo-seo.png',
          width: '488px',
          height: '100px',
        },
        url: 'https://www.epicurious.com',
      },
      isPartOf: {
        '@type': 'CreativeWork',
        name: 'Epicurious',
      },
      isAccessibleForFree: true,
      author: [
        {
          '@type': 'Person',
          name: 'Shilpa Uskokovic',
          sameAs: 'https://www.epicurious.com/contributor/shilpa-uskokovic',
        },
      ],
      description:
        'The classic pairing of radishes and butter inspires this version featuring creamy yogurt flavored with toasted sesame seeds and sesame oil.',
      image: [
        'https://assets.epicurious.com/photos/664c62afdfb9ebe92fd7ba3b/16:9/w_8256,h_4644,c_limit/240403_BON_APPETIT_SIMPLE_SUMMER_COOKING_PEDENMUNK_RADISH_3778.jpg',
        'https://assets.epicurious.com/photos/664c62afdfb9ebe92fd7ba3b/4:3/w_7336,h_5502,c_limit/240403_BON_APPETIT_SIMPLE_SUMMER_COOKING_PEDENMUNK_RADISH_3778.jpg',
        'https://assets.epicurious.com/photos/664c62afdfb9ebe92fd7ba3b/1:1/w_5504,h_5504,c_limit/240403_BON_APPETIT_SIMPLE_SUMMER_COOKING_PEDENMUNK_RADISH_3778.jpg',
      ],
      headline: 'Radishes With Sesame Yogurt',
      name: 'Radishes With Sesame Yogurt',
      recipeIngredient: [
        '2 Tbsp. sesame seeds',
        '1 cup plain whole-milk Greek yogurt',
        '2 tsp. toasted sesame oil',
        '¼ cup finely chopped dill, plus more for  serving',
        '1 tsp. Diamond Crystal or ½ tsp.  Morton kosher salt, plus more',
        '½ tsp. freshly ground pepper, plus more',
        '8 oz. mixed radishes (such as red, watermelon, and/or breakfast), trimmed, halved, quartered if large',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          text: 'Toast 2 Tbsp. sesame seeds in a dry small skillet over medium heat, tossing often, until deep golden brown, 5–8 minutes. Let cool. Set 1 tsp. sesame seeds aside for serving. Place remaining seeds in a small bowl.',
        },
        {
          '@type': 'HowToStep',
          text: 'Add 1 cup plain whole-milk Greek yogurt, 2 tsp. toasted sesame oil, ¼ cup finely chopped dill, 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt, and ½ tsp. freshly ground pepper to sesame seeds in bowl and mix well. Taste sauce and season with more salt and pepper if needed.',
        },
        {
          '@type': 'HowToStep',
          text: 'Spoon sauce onto one side of a platter or large plate; top with more dill and reserved sesame seeds. Pile 8 oz. mixed radishes (such as red, watermelon, and/or breakfast), trimmed, halved, quartered if large, on other side of platter for dipping.',
        },
      ],
      totalTime: '10 minutes',
      recipeYield: '4 servings',
      url: 'https://www.bonappetit.com/recipe/radishes-with-sesame-yogurt',
      dateModified: '2024-05-21T05:00:00.000-04:00',
      datePublished: '2024-05-21T05:00:00.000-04:00',
    })
  })

  test('www.skinnytaste.com', async () => {
    const url =
      'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/'

    const recipe = await getRecipeData(url)

    expect(recipe).toStrictEqual({
      '@type': 'Recipe',
      name: 'Air Fryer Salmon with Maple Soy Glaze',
      author: {
        '@id':
          'https://www.skinnytaste.com/#/schema/person/d30ee2b4f0b2b8cff8d010fbf4228b72',
      },
      description:
        'Air Fryer Salmon with Maple Soy Glaze is a quick and easy way to cook salmon with just five ingredients! Delicious and cooks in under 10 minutes!',
      datePublished: '2023-02-18T13:23:12+00:00',
      image: [
        'https://www.skinnytaste.com/wp-content/uploads/2019/08/Air-Fryer-Salmon-with-Maple-Soy-Glaze-7.jpg',
        'https://www.skinnytaste.com/wp-content/uploads/2019/08/Air-Fryer-Salmon-with-Maple-Soy-Glaze-7-500x500.jpg',
        'https://www.skinnytaste.com/wp-content/uploads/2019/08/Air-Fryer-Salmon-with-Maple-Soy-Glaze-7-500x375.jpg',
        'https://www.skinnytaste.com/wp-content/uploads/2019/08/Air-Fryer-Salmon-with-Maple-Soy-Glaze-7-480x270.jpg',
      ],
      video: {
        name: '5-Ingredient Air Fryer Salmon with Maple Soy Glaze',
        description:
          'This 5-Ingredient Air Fryer Salmon with Maple Soy Glaze is flavorful, tender and cooks in under 10 minutes! This is my favorite way to make salmon!!\n\nPRINT FULL RECIPE: https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/\n#airfryerrecipes #easyrecipes #healthyrecipes #salmon #dinner #healthydinner #Weightwatcherrecipes',
        uploadDate: '2023-02-27T18:20:14+00:00',
        duration: 'PT53S',
        thumbnailUrl: 'https://i.ytimg.com/vi/5S-HIhhph0M/hqdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/5S-HIhhph0M?feature=oembed',
        contentUrl: 'https://www.youtube.com/watch?v=5S-HIhhph0M',
        '@type': 'VideoObject',
      },
      recipeYield: ['4'],
      prepTime: 'PT5M',
      cookTime: 'PT8M',
      totalTime: 'PT33M',
      recipeIngredient: [
        '3 tbsp pure maple syrup',
        '3 tbsp reduced sodium soy sauce (or gluten-free soy sauce)',
        '1 tbsp sriracha hot sauce',
        '1 clove garlic (smashed)',
        '4  wild salmon fillets (skinless (6 oz each))',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          text: 'Combine maple syrup, soy sauce, sriracha and garlic in a small bowl, pour into a gallon sized resealable bag and add the salmon.',
          name: 'Combine maple syrup, soy sauce, sriracha and garlic in a small bowl, pour into a gallon sized resealable bag and add the salmon.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-0',
        },
        {
          '@type': 'HowToStep',
          text: 'Marinate 20 to 30 minutes, turning once in a while.',
          name: 'Marinate 20 to 30 minutes, turning once in a while.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-1',
        },
        {
          '@type': 'HowToStep',
          text: 'Lightly spray the basket with oil.',
          name: 'Lightly spray the basket with oil.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-2',
        },
        {
          '@type': 'HowToStep',
          text: 'Remove the fish from the marinade, reserving and pat dry with paper towels.',
          name: 'Remove the fish from the marinade, reserving and pat dry with paper towels.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-3',
        },
        {
          '@type': 'HowToStep',
          text: 'Place the fish in the air fryer, in batches, air fry 400F 7 to 8 minutes, or longer depending on thickness of the salmon.',
          name: 'Place the fish in the air fryer, in batches, air fry 400F 7 to 8 minutes, or longer depending on thickness of the salmon.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-4',
        },
        {
          '@type': 'HowToStep',
          text: 'Meanwhile, pour the marinade in a small saucepan and bring to a simmer over medium-low heat and reduce until it thickens into a glaze, 1 to 2 minutes. Spoon over salmon just before eating.',
          name: 'Meanwhile, pour the marinade in a small saucepan and bring to a simmer over medium-low heat and reduce until it thickens into a glaze, 1 to 2 minutes. Spoon over salmon just before eating.',
          url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-0-5',
        },
        {
          '@type': 'HowToSection',
          name: 'Skillet Method',
          itemListElement: [
            {
              '@type': 'HowToStep',
              text: 'Use this skillet version if you don&#39;t have an air fryer.',
              name: 'Use this skillet version if you don&#39;t have an air fryer.',
              url: 'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#wprm-recipe-53916-step-1-0',
            },
          ],
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.91',
        ratingCount: '162',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'This was very tasty. Thanks for the recipe.',
          author: {
            '@type': 'Person',
            name: 'GoBlue99',
          },
          datePublished: '2024-06-02',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'This recipe has been a hit every time I’ve served it to guests. They all ask me for the recipe afterwards! We have started wrapping the filets in these paper thin cedar wraps, can get on Amazon, (TrueFire is one brand  but there’s others)  that are tied with a string. Looks super fancy but it’s not! Then grilling them. It tastes like something you’d have in a nice restaurant, and the whole recipe is crazy easy!',
          author: {
            '@type': 'Person',
            name: 'Rhonda Olson',
          },
          datePublished: '2024-04-17',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'So easy, and quite tasty.',
          author: {
            '@type': 'Person',
            name: 'Barb',
          },
          datePublished: '2024-04-02',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'Simple and awesome!',
          author: {
            '@type': 'Person',
            name: 'Pat',
          },
          datePublished: '2024-03-21',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'Wonderful marinade/glaze. I made a few tweaks: added mirin, used lemon pepper and added grated lemon zest.',
          author: {
            '@type': 'Person',
            name: 'Sandy',
          },
          datePublished: '2024-03-12',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'YUMMMMMM Great Idea!',
          author: {
            '@type': 'Person',
            name: 'Rachel Sims',
          },
          datePublished: '2024-03-07',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            "Finally tried this with the authentic version and my son kept saying it was too good  to be healthy (he's cutting weight for a taekwondo fight)",
          author: {
            '@type': 'Person',
            name: 'Christian',
          },
          datePublished: '2024-02-28',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'It was delicious!! I was skeptical at first putting maple syrup on fish but it turned out great',
          author: {
            '@type': 'Person',
            name: 'Laura',
          },
          datePublished: '2024-02-25',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'Delicious and so easy! Will cook again',
          author: {
            '@type': 'Person',
            name: 'Jillian',
          },
          datePublished: '2024-02-18',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'Great marinade/glaze.  Trying to add more fish to our diet and this was a nice addition.',
          author: {
            '@type': 'Person',
            name: 'Nancy',
          },
          datePublished: '2024-02-17',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            "I've been making this dish for the last few years and it always tastes great! I just started weight watchers and it's only 5 WW points!",
          author: {
            '@type': 'Person',
            name: 'Vicki',
          },
          datePublished: '2024-02-14',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4',
          },
          reviewBody:
            "YUMMY!\r\nUnfortunately I had to substitute maple syrup with pancake syrup/honey mixture, but it was a hit at my house. I can't wait to try the actual version!",
          author: {
            '@type': 'Person',
            name: 'Christian',
          },
          datePublished: '2024-02-08',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'I cooked it a bit longer with the skin on, like 10-13 mins depending on thickness.',
          author: {
            '@type': 'Person',
            name: 'Ashley',
          },
          datePublished: '2024-02-07',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'This recipe is so yummy! Even my husband who isn’t a big salmon fan loves when I make this!',
          author: {
            '@type': 'Person',
            name: 'Kathy',
          },
          datePublished: '2024-02-05',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            'I have made this a lot and it never fails to be tasty!  It’s easy and my go to for Salmon!',
          author: {
            '@type': 'Person',
            name: 'Clare',
          },
          datePublished: '2024-02-01',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'So good!',
          author: {
            '@type': 'Person',
            name: 'Karen',
          },
          datePublished: '2024-01-31',
        },
      ],
      recipeCategory: ['Dinner'],
      recipeCuisine: ['American', 'Asian'],
      keywords:
        'air fryer salmon, Air Fryer Salmon with Maple Soy Glaze, asian air fryer salmon',
      nutrition: {
        '@type': 'NutritionInformation',
        calories: '292 kcal',
        carbohydrateContent: '12 g',
        proteinContent: '35 g',
        fatContent: '11 g',
        saturatedFatContent: '1.5 g',
        cholesterolContent: '94 mg',
        sodiumContent: '797 mg',
        fiberContent: '0.5 g',
        sugarContent: '10 g',
        servingSize: '1 salmon fillet',
      },
      '@id':
        'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#recipe',
      isPartOf: {
        '@id':
          'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/#article',
      },
      mainEntityOfPage:
        'https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/',
    })
  })

  test('www.halfbakedharvest.com', async () => {
    const url = 'https://www.halfbakedharvest.com/lemon-garlic-steak-and-rice/'

    const recipe = await getRecipeData(url)

    expect(recipe).toStrictEqual({
      '@type': 'Recipe',
      name: '30 Minute Herby Lemon Garlic Steak and Rice',
      author: {
        '@id':
          'https://www.halfbakedharvest.com/#/schema/person/9b2904ad2a2c76cbcd62517659d460f7',
      },
      description:
        'Easy to throw together and great for grilling on warm nights...the perfect summer dinner bowl!',
      datePublished: '2024-05-30T01:00:00+00:00',
      image: [
        'https://www.halfbakedharvest.com/wp-content/uploads/2024/05/30-Minute-Herby-Lemon-Garlic-Steak-and-Rice-1-scaled.jpg',
        'https://www.halfbakedharvest.com/wp-content/uploads/2024/05/30-Minute-Herby-Lemon-Garlic-Steak-and-Rice-1-500x500.jpg',
        'https://www.halfbakedharvest.com/wp-content/uploads/2024/05/30-Minute-Herby-Lemon-Garlic-Steak-and-Rice-1-500x375.jpg',
        'https://www.halfbakedharvest.com/wp-content/uploads/2024/05/30-Minute-Herby-Lemon-Garlic-Steak-and-Rice-1-480x270.jpg',
      ],
      recipeYield: ['6'],
      prepTime: 'PT20M',
      cookTime: 'PT10M',
      totalTime: 'PT30M',
      recipeIngredient: [
        '2 pounds flank steak',
        '1/2  cup extra virgin olive oil',
        '1/4 cup fresh lemon juice',
        '2 tablespoons balsamic vinegar',
        '1  shallot, thinly sliced',
        '6 cloves garlic, chopped',
        '1 teaspoon honey',
        '1 tablespoon dried oregano',
        'salt, pepper, and chili flakes',
        '3 cups cooked basmati rice',
        '2 tablespoons extra virgin olive oil',
        '1/2 cup chopped fresh basil',
        '1/4 cup chopped fresh cilantro',
        '2 tablespoons chopped fresh dill',
        '2 teaspoons lemon zest',
        '1 clove garlic, chopped',
        '1  avocado, sliced',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          text: '1. In a bowl, toss together the steak, olive oil, lemon juice, balsamic vinegar, garlic, honey, oregano, chili flakes, and a big pinch of salt. Mix well to coat/submerge the steak in the marinade. If time allows, marinate for 20 mins.2. Set your grill, grill pan, or skillet to medium-high heat. Grill the steak until lightly charred, 5-8 minutes for medium-rare, per side. Remove the steaks and allow them to rest for 5-10 minutes.3. Meanwhile, simmer any leftover marinade in a small pot set over medium heat for 5-10 minutes. Set aside for serving. 4. To make the rice. Mix all ingredients in a bowl and season to taste with salt and pepper. 5.  Spoon the reserved sauce over the slices of steak, then serve the steak over plates or bowls of herby rice. Top with avocado. Enjoy!',
          name: '1. In a bowl, toss together the steak, olive oil, lemon juice, balsamic vinegar, garlic, honey, oregano, chili flakes, and a big pinch of salt. Mix well to coat/submerge the steak in the marinade. If time allows, marinate for 20 mins.2. Set your grill, grill pan, or skillet to medium-high heat. Grill the steak until lightly charred, 5-8 minutes for medium-rare, per side. Remove the steaks and allow them to rest for 5-10 minutes.3. Meanwhile, simmer any leftover marinade in a small pot set over medium heat for 5-10 minutes. Set aside for serving. 4. To make the rice. Mix all ingredients in a bowl and season to taste with salt and pepper. 5.  Spoon the reserved sauce over the slices of steak, then serve the steak over plates or bowls of herby rice. Top with avocado. Enjoy!',
          url: 'https://www.halfbakedharvest.com/lemon-garlic-steak-and-rice/#wprm-recipe-165371-step-0-0',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '4',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'Made this and loved it! The steak sauce is delicious!',
          author: {
            '@type': 'Person',
            name: 'amanda dostie',
          },
          datePublished: '2024-06-04',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            "I made this dish tonight and it was sooooo good!!! My family loved it!! I can't wait to make it again!",
          author: {
            '@type': 'Person',
            name: 'Hope H',
          },
          datePublished: '2024-06-02',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody: 'Where do we use the shallot?',
          author: {
            '@type': 'Person',
            name: 'Courtney',
          },
          datePublished: '2024-05-31',
        },
      ],
      recipeCategory: ['Main Course'],
      recipeCuisine: ['American', 'Mediterranean'],
      keywords: '30 minutes, bowl food, grill, summer meal',
      nutrition: {
        '@type': 'NutritionInformation',
        calories: '586 kcal',
        servingSize: '1 serving',
      },
      '@id':
        'https://www.halfbakedharvest.com/lemon-garlic-steak-and-rice/#recipe',
      isPartOf: {
        '@id':
          'https://www.halfbakedharvest.com/lemon-garlic-steak-and-rice/#article',
      },
      mainEntityOfPage:
        'https://www.halfbakedharvest.com/lemon-garlic-steak-and-rice/',
    })
  })

  test('damndelicious.net', async () => {
    const url = 'https://damndelicious.net/2024/05/17/baked-tacos/'

    const recipe = await getRecipeData(url)

    expect(recipe).toStrictEqual({
      '@type': 'Recipe',
      name: 'Baked Tacos',
      author: {
        '@id':
          'https://damndelicious.net/#/schema/person/b5f3793618a48c5e85a0fde94b831682',
      },
      description:
        'Crispy oven baked tacos! Made with hard taco shells, ground beef, taco seasoning, cheese, pico de gallo, sour cream + avocado!',
      datePublished: '2024-05-17T21:00:17+00:00',
      image: [
        'https://s23209.pcdn.co/wp-content/uploads/2024/02/231201_DD_Oven-Baked-Tacos_183-1.jpg',
        'https://s23209.pcdn.co/wp-content/uploads/2024/02/231201_DD_Oven-Baked-Tacos_183-1-500x500.jpg',
        'https://s23209.pcdn.co/wp-content/uploads/2024/02/231201_DD_Oven-Baked-Tacos_183-1-500x375.jpg',
        'https://s23209.pcdn.co/wp-content/uploads/2024/02/231201_DD_Oven-Baked-Tacos_183-1-480x270.jpg',
      ],
      recipeYield: ['4', '4 servings'],
      prepTime: 'PT15M',
      cookTime: 'PT15M',
      totalTime: 'PT30M',
      recipeIngredient: [
        '1 tablespoon vegetable oil',
        '1 1/4 pounds lean ground beef',
        '1  small onion (diced)',
        '3 cloves garlic (minced)',
        '1 (1.25-ounce) package taco seasoning',
        '1/4 cup water or beer',
        '2 teaspoons hot sauce (such as Cholula)',
        '12  hard taco shells',
        '1 cup shredded Mexican blend cheese',
        'Pico de gallo',
        'Avocado',
        'Sour cream',
        'Cilantro',
        'Shredded lettuce',
        'Lime wedges',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          text: 'Heat vegetable oil in a large cast iron skillet over medium high heat. Add ground beef and cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks; drain excess fat.',
          name: 'Heat vegetable oil in a large cast iron skillet over medium high heat. Add ground beef and cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks; drain excess fat.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-0',
        },
        {
          '@type': 'HowToStep',
          text: 'Add onion, and cook, stirring frequently, until translucent, about 2-3 minutes.',
          name: 'Add onion, and cook, stirring frequently, until translucent, about 2-3 minutes.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-1',
        },
        {
          '@type': 'HowToStep',
          text: 'Stir in garlic until fragrant, about 1 minute.',
          name: 'Stir in garlic until fragrant, about 1 minute.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-2',
        },
        {
          '@type': 'HowToStep',
          text: 'Stir in taco seasoning, water or beer and hot sauce until flavors have blended, about 2-3 minutes.',
          name: 'Stir in taco seasoning, water or beer and hot sauce until flavors have blended, about 2-3 minutes.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-3',
        },
        {
          '@type': 'HowToStep',
          text: 'Preheat oven to 375 degrees F. Lightly oil a 9 x 13 baking dish or coat with nonstick spray.',
          name: 'Preheat oven to 375 degrees F. Lightly oil a 9 x 13 baking dish or coat with nonstick spray.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-4',
        },
        {
          '@type': 'HowToStep',
          text: 'Place taco shells in a single layer, standing up, into the prepared baking dish. Place into oven and bake until crispy, about 3-4 minutes.',
          name: 'Place taco shells in a single layer, standing up, into the prepared baking dish. Place into oven and bake until crispy, about 3-4 minutes.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-5',
        },
        {
          '@type': 'HowToStep',
          text: 'Working carefully, add 1/4 cup ground beef mixture to each taco shell; sprinkle with cheese.',
          name: 'Working carefully, add 1/4 cup ground beef mixture to each taco shell; sprinkle with cheese.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-6',
        },
        {
          '@type': 'HowToStep',
          text: 'Place into oven and bake until cheese has melted, about 4-5 minutes.',
          name: 'Place into oven and bake until cheese has melted, about 4-5 minutes.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-7',
        },
        {
          '@type': 'HowToStep',
          text: 'Serve immediately with desired toppings.',
          name: 'Serve immediately with desired toppings.',
          url: 'https://damndelicious.net/2024/05/17/baked-tacos/#wprm-recipe-36220-step-0-8',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '2',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            "I've been doing this for years, but I put the cheese in the taco shell before the meat. I find this keeps the fold in the shell from becoming soggy and tearing apart.",
          author: {
            '@type': 'Person',
            name: 'Gina',
          },
          datePublished: '2024-05-22',
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          reviewBody:
            '@damn delicious what kind of taco seasoning do you like best ?',
          author: {
            '@type': 'Person',
            name: 'Mindy Roadruck',
          },
          datePublished: '2024-05-18',
        },
      ],
      '@id': 'https://damndelicious.net/2024/05/17/baked-tacos/#recipe',
      isPartOf: {
        '@id': 'https://damndelicious.net/2024/05/17/baked-tacos/#article',
      },
      mainEntityOfPage: 'https://damndelicious.net/2024/05/17/baked-tacos/',
    })
  })
})
