"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => getRecipeData
});
module.exports = __toCommonJS(index_exports);

// src/utils.ts
var validateUrl = (input) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(input);
};
var validateHtml = (input) => {
  const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>[\s\S]*?<\/\1>/gi;
  return htmlRegex.test(input);
};
var getScriptTags = (html) => {
  const scriptTags = html.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi);
  return scriptTags || [];
};
var getApplicationLdJsonTags = (tags) => {
  const applicationLdJsonTags = tags.filter(
    (tag) => tag.includes("application/ld+json")
  );
  return applicationLdJsonTags;
};
var parseTagData = (tags) => {
  const schemaData = tags.map((tag) => {
    const data = tag.match(/{[^]*}/);
    return data ? JSON.parse(data[0]) : {};
  });
  return schemaData;
};
var getRecipeSchemaData = (schemaData) => {
  let recipeSchema = null;
  schemaData.forEach((data) => {
    if (data["@graph"]) {
      data["@graph"].forEach((graph) => {
        if (graph["@type"] === "Recipe") {
          recipeSchema = graph;
        }
      });
    }
    if (Array.isArray(data["@type"])) {
      if (data["@type"].includes("Recipe")) {
        recipeSchema = data;
      }
    }
    if (data["@type"] === "Recipe") {
      recipeSchema = data;
    }
  });
  return recipeSchema ? recipeSchema : null;
};
var formatString = (str) => typeof str === "string" ? str.trim() : void 0;
var formatStringOrArray = (input) => {
  if (!input) return void 0;
  if (Array.isArray(input)) {
    return input.map((str) => formatString(str));
  }
  return [formatString(input)];
};
var getAuthors = (schemaAuthors) => {
  if (!schemaAuthors) return void 0;
  if (Array.isArray(schemaAuthors)) {
    return schemaAuthors.map((author) => ({
      "@id": author["@id"],
      name: formatString(author.name),
      url: author.url
    }));
  }
  return [
    {
      "@id": schemaAuthors["@id"],
      name: formatString(schemaAuthors.name),
      url: schemaAuthors.url
    }
  ];
};
var getImage = (schemaImage) => {
  if (!schemaImage) return void 0;
  return {
    url: schemaImage.url,
    height: schemaImage.height,
    width: schemaImage.width ?? -1
  };
};
var getVideo = (schemaVideo) => {
  if (!schemaVideo) return void 0;
  return {
    contentUrl: schemaVideo.contentUrl,
    description: schemaVideo.description,
    duration: schemaVideo.duration,
    name: schemaVideo.name,
    thumbnailUrl: schemaVideo.thumbnailUrl,
    uploadDate: schemaVideo.uploadDate
  };
};
var getNutrition = (schemaNutrition) => {
  if (!schemaNutrition) return void 0;
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
    unsaturatedFatContent: schemaNutrition.unsaturatedFatContent
  };
};
var getInstructions = (schemaInstructions) => {
  if (!schemaInstructions) return void 0;
  const instructions = schemaInstructions.map((instruction) => {
    if (instruction.text) {
      const step = instruction;
      return {
        text: formatString(step.text),
        image: step.image?.map((img) => ({
          url: img.url,
          height: img.height,
          width: img.width
        }))
      };
    }
    const section = instruction;
    return {
      name: formatString(section.name),
      itemListElement: section.itemListElement?.map((step) => ({
        text: formatString(step.text),
        image: step.image?.map((img) => ({
          url: img.url,
          height: img.height,
          width: img.width
        }))
      }))
    };
  });
  return instructions;
};
var formatRecipeData = (schemaRecipeData) => ({
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
  totalTime: schemaRecipeData.totalTime
});

// src/index.ts
async function getRecipeData(input, config = {}) {
  let html = null;
  const validHtml = validateHtml(input);
  if (validHtml) html = input;
  const validUrl = validateUrl(input);
  if (validUrl) {
    const response = await fetch(input, config);
    html = await response.text();
  }
  if (!html) throw new Error("Invalid input");
  const tags = getScriptTags(html);
  if (tags.length === 0) throw new Error("No script tags found");
  const applicationLdJsonTags = getApplicationLdJsonTags(tags);
  if (applicationLdJsonTags.length === 0)
    throw new Error("No application/ld+json tags found");
  const parsedTagData = parseTagData(applicationLdJsonTags);
  const recipeSchemaData = getRecipeSchemaData(parsedTagData);
  if (!recipeSchemaData) throw new Error("No recipe data found");
  const recipeData = formatRecipeData(recipeSchemaData);
  return recipeData;
}
//# sourceMappingURL=index.js.map