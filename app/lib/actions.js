/** @format */
"use server";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  try {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    if (!meal.image || typeof meal.image.arrayBuffer !== "function") {
      throw new Error(
        "Please select a valid image file to share with your meal."
      );
    }

    const buffer = await meal.image.arrayBuffer();
    meal.image = {
      name: meal.image.name,
      buffer: Buffer.from(buffer),
    };

    console.log("Meal data:", meal);
    await saveMeal(meal);
    revalidatePath("/meals");

    return { success: true };
  } catch (error) {
    console.error("Error sharing meal:", error);
    return { error: error.message };
  }
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/meals" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
