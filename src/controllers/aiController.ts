
// import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";

import { Request, Response } from 'express';


// import { createLanguageModel, createJsonTranslator } from "typechat";

export const buildWorkspace = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\r\n  \"resource_group_name\": \"resource-group-1\",\r\n  \"resource_group_location\": \"westeurope\",\r\n  \"resources\": [\r\n    {\r\n\"index\": 1,\r\n\"type\": \"dps\",\r\n\"arguments\": {\r\n  \"name\": \"dps1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n },\r\n {\r\n\"index\": 2,\r\n\"type\": \"iothub\",\r\n\"arguments\": {\r\n  \"name\": \"iothub1\",\r\n  \"azure_location\": \"westeurope\",\r\n  \"sku\": { \"name\": \"s1\", \"capacity\": \"1\" }\r\n}\r\n }\r\n  ],\r\n  \"Links\": [\r\n {\r\n\"from\": 1,\r\n\"operation\": \"Linked to iothub\",\r\n\"to\": 2 \r\n}\r\n  ]\r\n}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};


export const generateScript = async (req: Request, res: Response) => {
    console.log(req)
    const response = "{\"script\":\"@description('Specify the name of the Iot hub.')\r\nparam iotHubName string\r\n\r\n@description('Specify the name of the provisioning service.')\r\nparam provisioningServiceName string\r\n\r\n@description('Specify the location of the resources.')\r\nparam location string = resourceGroup().location\r\n\r\n@description('The SKU to use for the IoT Hub.')\r\nparam skuName string = 'S1'\r\n\r\n@description('The number of IoT Hub units.')\r\nparam skuUnits int = 1\r\n\r\nvar iotHubKey = 'iothubowner'\r\n\r\nresource iotHub 'Microsoft.Devices\/IotHubs@2021-07-02' = {\r\n  name: iotHubName\r\n  location: location\r\n  sku: {\r\n    name: skuName\r\n    capacity: skuUnits\r\n  }\r\n  properties: {}\r\n}\r\n\r\nresource provisioningService 'Microsoft.Devices\/provisioningServices@2022-02-05' = {\r\n  name: provisioningServiceName\r\n  location: location\r\n  sku: {\r\n    name: skuName\r\n    capacity: skuUnits\r\n  }\r\n  properties: {\r\n    iotHubs: [\r\n      {\r\n        connectionString: 'HostName=${iotHub.properties.hostName};SharedAccessKeyName=${iotHubKey};SharedAccessKey=${iotHub.listkeys().value[0].primaryKey}'\r\n        location: location\r\n      }\r\n    ]\r\n  }\r\n}\"}"
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};