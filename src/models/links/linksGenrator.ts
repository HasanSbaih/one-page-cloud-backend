

import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import { createLanguageModel, createJsonTranslator } from "typechat";
import { ResourcesLinksList } from "./ResourcesLinksListSchema";


// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../../.env") });

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join("src/models/links/", "ResourcesLinksListSchema.ts"), "utf8");
const translator = createJsonTranslator<ResourcesLinksList>(model, schema, "ResourcesLinksList");

export const generateResourcesLinks = async (source: String, destination: String) => {
    try {
        const prompt = `source: ${source}
        destination: ${destination}`;

        const response = await translator.translate(prompt);

        if (!response.success) {
            console.debug(response.message);
            throw new Error(response.message);
        }
        return response.data;
    } catch (error) {
        console.error("Error in generateProjectPlan:", (error as any).message);
        throw error;
    }
};


