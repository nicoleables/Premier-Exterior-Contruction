// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eudijsiewwnmucfwqplu.supabase.co";
const supabaseKey = "sb_publishable_uF_tf2mMLul78J58uGb2fQ_RC_DFu1V";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchAllPhotos() {
  const { data, error } = await supabase
    .storage
    .from("allphotos")
    .list("", { limit: 100 });

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  console.log("Raw list data:", data);

  // Filter out Supabase empty folder placeholder
  const realFiles = data.filter(file => file.name !== ".emptyFolderPlaceholder");

  const urls = realFiles.map(file =>
    `${supabaseUrl}/storage/v1/object/public/allphotos/${encodeURIComponent(file.name)}`
  );

  console.log("Generated URLs:", urls);
  return urls;
}
