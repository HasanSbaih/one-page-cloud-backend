

import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import { createLanguageModel, createJsonTranslator } from "typechat";
import {  AzureArchitectureDiagramWorkspace } from "./WorkspaceSchema" ;


// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../.env") });

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join("src/models/", "WorkspaceSchema.ts"), "utf8");
const translator = createJsonTranslator<AzureArchitectureDiagramWorkspace>(model, schema, "AzureArchitectureDiagramWorkspace");

export const generateWorkspace = async (summary: String, resources: String) => {
    try {
        const prompt = `create an Azure architcute digram based on the summary below, you may use only the resources listed in the resources json object: 
        resources: ${resources}
        summary: ${summary}`;

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


