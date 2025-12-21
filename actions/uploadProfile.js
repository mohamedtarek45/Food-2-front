"use server";

import cloudinary from "@/lib/cloudinary";

export async function uploadProfileAction(file) {
  try {
    if (!file || !(file instanceof File)) {
      throw new Error("No file provided");
    }
    if (!file.type.startsWith("image/")) {
      throw new Error("Only images allowed");
    }
    if (file.size > 4.5 * 1024 * 1024) {
      throw new Error("Max size is 4.5MB");
    }
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const mimeType = file.type;

    const dataUri = `data:${mimeType};base64,${base64}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "NITGTASK",
      resource_type: "image",
      
      format: "webp",
      quality: "auto",
      fetch_format: "auto",
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
    });
    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    toast.error("Invalid file");
  }
}
