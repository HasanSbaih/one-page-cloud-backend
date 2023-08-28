// Represents the output of a Bicep/Terraform script generator based on an azure architecture graph 
export interface ScriptsGeneratorOutput {
  // the generator output as a script in Bicep/Terraform language that will be used to deply the azure resources
  deploymentScript: string;
}


