
import fs from "fs";
import path from "path";
// import path from "path";
// import dotenv from "dotenv";
import { generateResourcesLinks } from "../models/links/linksGenrator";
import { Request, Response } from 'express';



// import { createLanguageModel, createJsonTranslator } from "typechat";

//loads resources from json file
export const getResources = async (req: Request, res: Response) => {

    console.log(req)
    const jsonContent = fs.readFileSync(path.join(__dirname, "\\resources.json"), 'utf-8');
    const jsonData = JSON.parse(jsonContent);

    res.send(jsonData);
};

export const getLinks = async (req: Request, res: Response) => {

    const source: string | undefined = req.query.source as string;
    const destination: string | undefined = req.query.destination as string;

    const list = await generateResourcesLinks(source, destination);

    res.setHeader('Content-Type', 'application/json');
    res.send(list);
};