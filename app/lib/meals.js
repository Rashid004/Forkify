/** @format */

import sql from "better-sqlite3";
import fs from "node:fs/promises";
import path from "path";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  try {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    if (!meal.image || !meal.image.buffer) {
      throw new Error("Please provide a valid image file.");
    }

    const extension = path.extname(meal.image.name).toLowerCase();
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (!allowedExtensions.includes(extension)) {
      throw new Error("Only image files (JPG, JPEG, PNG, GIF) are allowed.");
    }

    const fileName = `${meal.slug}${extension}`;
    const imagePath = path.join(process.cwd(), "public", "images", fileName);

    await fs.writeFile(imagePath, meal.image.buffer);

    meal.image = `/images/${fileName}`;

    const insertQuery = `
      INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.prepare(insertQuery).run(
      meal.title,
      meal.summary,
      meal.instructions,
      meal.creator,
      meal.creator_email,
      meal.image,
      meal.slug
    );

    console.log("Meal saved successfully:", meal);
    return meal;
  } catch (error) {
    console.error("Error saving meal:", error);
    throw error;
  }
}
