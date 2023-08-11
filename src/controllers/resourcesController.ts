
// import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";

import { Request, Response } from 'express';


// import { createLanguageModel, createJsonTranslator } from "typechat";

export const getResources = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n \"resources\": [\r\n  {\r\n\"type\":\"iothub\",\r\n\"arguments\":[\r\n {\r\n  \"name\":\"name\",\r\n  \"type\":\"string\",\r\n  \"required\": true\r\n },\r\n {\r\n  \"name\":\"location\",\r\n  \"type\":\"enum\",\r\n  \"required\": true,\r\n  \"defualt\": \"westeurope\",\r\n  \"values\": [\"westeurope\",\"eastus\"]\r\n }\r\n],\r\n\"icon\":\"iothub-icon\"\r\n  },\r\n  {\r\n\"type\":\"dps\",\r\n\"arguments\":[\r\n {\r\n  \"name\":\"name\",\r\n  \"type\":\"string\",\r\n  \"required\": true\r\n },\r\n {\r\n  \"name\":\"location\",\r\n  \"type\":\"enum\",\r\n  \"required\": true,\r\n  \"defualt\": \"westeurope\",\r\n  \"values\": [\"westeurope\",\"eastus\"]\r\n }\r\n],\r\n\"icon\":\"dps-icon\"\r\n  }\r\n ] \r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};

export const getLinks = async (req: Request, res: Response) => {
    console.log(req)
    const links = "{\"links\":[\"link to iothub\",\"export telmetry messages to storage\",\"export telmetry messages to cosmosdb\"]}"
    res.setHeader('Content-Type', 'application/json');
    res.send(links);
};