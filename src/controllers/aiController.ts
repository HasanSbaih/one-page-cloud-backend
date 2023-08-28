
import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";

import { Request, Response } from 'express';
import { generateWorkspace } from "../models/workspaceGenerator";
import { generateCloudScript } from "../models/scripts/ScriptsGenerator";



// import { createLanguageModel, createJsonTranslator } from "typechat";

export const buildWorkspace = async (req: Request, res: Response) => {
    const summary: string = req.body.description;
    const jsonContent = fs.readFileSync("resources.json", 'utf-8');
    const resources = JSON.parse(jsonContent);



    const response = await generateWorkspace(summary,resources);
    res.send(response);
};


export const generateScript = async (req: Request, res: Response) => {
    
    const graph: string = JSON.stringify(req.body.graph);
    const language: string = req.body.language;
    const response = await generateCloudScript(graph,language);

    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};