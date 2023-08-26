/**
 * Azure Architecture Diagram workspace Schema
 */

// Defines a single resource in the architecture
export interface Resource {
    // The index that uniquely identifies the resource
    index: number;
  
    // The type of Azure resource (e.g., 'Device Provisioning Services', 'IoT Hub')
    resource: string;
  }
  
  // Defines the links between resources that describe a possible operation or relationship between them
export interface Link {
    // The index of the source resource
    source: number;
  
    // Describes the operation or relationship between the source and destination (e.g., 'export devices telmetry to Storage Account')
    operation: string;
  
    // The index of the destination resource
    destination: number;
  }
  
  // The root object that contains all the resources and links
export interface AzureArchitectureDiagramWorkspace {
    // An array of all resources in the architecture
    resources: Resource[];
  
    // An array of all the links between resources
    Links: Link[];
  }
  
  // Example usage
  const example: AzureArchitectureDiagramWorkspace = {
    resources: [
      {
        index: 1,
        resource: 'Device Provisioning Services'
      },
      {
        index: 2,
        resource: 'IoT Hub'
      }
    ],
    Links: [
      {
        source: 1,
        operation: 'Link Device Provisioning Services to IoT Hub',
        destination: 2
      }
    ]
  };
  