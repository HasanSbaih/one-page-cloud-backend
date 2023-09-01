
import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";
import AzureArchitectureDiagramWorkspace from './../models/AzureArchitectureDiagramWorkspaceSchema';

import { Request, Response } from 'express';
import { generateWorkspace } from "../models/workspaceGenerator";
import { generateCloudScript } from "../models/scripts/ScriptsGenerator";



// import { createLanguageModel, createJsonTranslator } from "typechat";

export const buildWorkspace = async (req: Request, res: Response) => {
    const summary: string = req.body.description;
    const jsonContent = fs.readFileSync("resources.json", 'utf-8');
    const resources = JSON.parse(jsonContent);



    const response = await generateWorkspace(summary, resources);
    res.send(response);
};


export const generateScript = async (req: Request, res: Response) => {

    try {
        const workspace = await AzureArchitectureDiagramWorkspace.findById(req.params.id);

        if (!workspace) {
            return res.status(404).send();
        }

        const graph: string = JSON.stringify(workspace);
        const language: string | undefined = req.query.language as string;
        const response = await generateCloudScript(graph, language);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }

};