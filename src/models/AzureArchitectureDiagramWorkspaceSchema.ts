import mongoose, { Document, Schema } from 'mongoose';

export interface IResource {
  index: number;
  resource: string;
}

export interface ILink {
  source: number;
  operation: string;
  destination: number;
}

export interface IAzureArchitectureDiagramWorkspace extends Document {
  resources: IResource[];
  Links: ILink[];
}

const ResourceSchema = new Schema<IResource>({
  index: {
    type: Number,
    required: true,
  },
  resource: {
    type: String,
    required: true,
  },
});

const LinkSchema = new Schema<ILink>({
  source: {
    type: Number,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  destination: {
    type: Number,
    required: true,
  },
});

const AzureArchitectureDiagramWorkspaceSchema = new Schema<IAzureArchitectureDiagramWorkspace>({
  resources: {
    type: [ResourceSchema],
    required: true,
  },
  Links: {
    type: [LinkSchema],
    required: true,
  },
});

export default mongoose.model<IAzureArchitectureDiagramWorkspace>('AzureArchitectureDiagramWorkspace', AzureArchitectureDiagramWorkspaceSchema);
