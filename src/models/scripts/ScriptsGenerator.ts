

// import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import { createLanguageModel } from "typechat";
// import {  ScriptsGeneratorOutput } from "./ScriptsGeneratorOutputSchema" ;
// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");



// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../.env") });

const model = createLanguageModel(process.env);
// const schema = fs.readFileSync(path.join("src/models/scripts", "ScriptsGeneratorOutputSchema.ts"), "utf8");
// const translator = createJsonTranslator<ScriptsGeneratorOutput>(model, schema, "ScriptsGeneratorOutput");

export const generateCloudScript = async (architecture: String, language: String) => {
    try {
        const prompt = `You are an Azure Solution Architect employed by Microsoft. Your task is to generate a script using either ${language} to deploy an Azure cloud architecture based on the provided JSON graph. 
        Adhere to the following guidelines to ensure a successful deployment:

        1. Deploy all resources represented in the graph.
        2. Follow the order specified in the graph for deploying resources.
        3. Ensure all resources are deployed in the same Azure region.
        4. Place all resources in the same Azure resource group.
        5. Deploy the resources within the same Azure subscription.
        6. For each resource, you may set default values for all required properties.
        7. Add comments to the script to clarify the purpose and function of each resource.
        8. Integrate parameters into the script, allowing users to modify property values as needed.
        9. Utilize the most up-to-date syntax for either Bicep or Terraform that you are familiar with.
        10. Include any configurations needed to establish inter-resource connections as indicated in the graph.
        11. Feel free to incorporate any additional configurations or resources that you believe are necessary for a successful deployment of the graph's architecture.

        Azure Architecture Graph: ${architecture}`;

        // const client = new OpenAIClient(
        //     process.env.AZURE_OPENAI_RESOURCE,
        //     new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY)
        // );
        const response = await model.complete(prompt);


        if (!response.success) {
            console.debug(response.message);
            throw new Error(response.message);
        }
        return response;
    } catch (error) {
        console.error("Error in generateProjectPlan:", (error as any).message);
        throw error;
    }
};


