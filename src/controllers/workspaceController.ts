


import { Request, Response } from 'express';



export const getWorkspace = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n  \"resource_group_name\": \"resource-group-1\",\r\n  \"resource_group_location\": \"westeurope\",\r\n  \"resources\": [\r\n    {\r\n\"index\": 1,\r\n\"type\": \"dps\",\r\n\"arguments\": {\r\n  \"name\": \"dps1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n },\r\n {\r\n\"index\": 2,\r\n\"type\": \"iothub\",\r\n\"arguments\": {\r\n  \"name\": \"iothub1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n }\r\n  ],\r\n  \"Links\": [\r\n {\r\n\"from\": 1,\r\n\"operation\": \"Linked to iothub\",\r\n\"to\": 2 \r\n}\r\n  ]\r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};

export const getWorkspaceById = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n  \"resource_group_name\": \"resource-group-1\",\r\n  \"resource_group_location\": \"westeurope\",\r\n  \"resources\": [\r\n    {\r\n\"index\": 1,\r\n\"type\": \"dps\",\r\n\"arguments\": {\r\n  \"name\": \"dps1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n },\r\n {\r\n\"index\": 2,\r\n\"type\": \"iothub\",\r\n\"arguments\": {\r\n  \"name\": \"iothub1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n }\r\n  ],\r\n  \"Links\": [\r\n {\r\n\"from\": 1,\r\n\"operation\": \"Linked to iothub\",\r\n\"to\": 2 \r\n}\r\n  ]\r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};

export const createWorkspace = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n\"id\":\"e78e68aa-792b-4b62-9fee-bcc923fa19d0\"\r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};

export const updateWorkspace = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n\"id\":\"e78e68aa-792b-4b62-9fee-bcc923fa19d0\"\r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};