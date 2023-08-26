// The following is a schema definition for the links between two Azure cloud resources in an archetecture diagram.
export interface ResourcesLinksList {
    //a list of at most three potential operations description that could be performed between {source} and {destination}, each operation should be euniqe for the user to select from. 
    potentialOperations:(String)[];
}