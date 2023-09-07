


import { Request, Response } from 'express';
import AzureArchitectureDiagramWorkspace, { IAzureArchitectureDiagramWorkspace } from './../models/AzureArchitectureDiagramWorkspaceSchema';




export const getWorkspace = async (req: Request, res: Response) => {
    try {
        const workspace = await AzureArchitectureDiagramWorkspace.find();
        if (!workspace) {
            return res.status(404).send();
        }
        res.status(200).send(workspace);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getWorkspaceById = async (req: Request, res: Response) => {
    try {
        const workspace = await AzureArchitectureDiagramWorkspace.findById(req.params.id);
        if (!workspace) {
            return res.status(404).send();
        }
        res.status(200).send(workspace);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createWorkspace = async (req: Request, res: Response) => {
    try {
        const workspace =  new AzureArchitectureDiagramWorkspace(req.body as IAzureArchitectureDiagramWorkspace);
        await workspace.save();
        res.status(201).send(workspace);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateWorkspace = async (req: Request, res: Response) => {
    try {
        const workspace = await AzureArchitectureDiagramWorkspace.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workspace) {
            return res.status(404).send();
        }
        res.status(200).send(workspace);
    } catch (error) {
        res.status(400).send(error);
    }
};