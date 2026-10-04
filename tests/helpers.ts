import path from "path";
import { pathToFileURL } from "url";

// Adresse du fichier index.html, utilisable par page.goto()
export const URL_PAGE = pathToFileURL(path.resolve("index.html")).href;
