# React JS Recipe App

This app does not do anything special as of now. It's a simple react app that shows a recipe.

It uses the create react app command and uses the facebook recommended project structure

Further, it shows a quick and easy YAML configuration for deploying with Azure Pipelines to an Azure Web App

# Deployment Web App

Currently deployed at this [Azure Web Site](https://reactjsrecipeappsep232020.azurewebsites.net/) via CICD Azure DevOps Pipelines.

# multiple YAML files

I have kept multiple versions of YAML files in this code. That is on purpose as they have different implementations and comments and so on.

# Azure Pipeline - Switch from AzureWebApp to AzureRMWebAppDeployment

I encountered an issue where, the very first deployment to the azure web app service would always NEVER deploy the site files. 

However, successive deployments, with zero changes to the code - I would use a simple comment line as a file change - to trigger a deployment, and it would work. 

The issue is described here. 

https://stackoverflow.com/questions/64060317/azure-devops-first-time-web-app-deployment-always-gives-error

# Deafault React Read Me

Go Here for the default [Create React App](READMEOfCreateReact.md) readme.

# important note 

This code is provided as is without any warranties. It's primarily meant for our own use. Feel free to use this code as it pleases you.

# About

Owner and Developer of this project - [Jay](http://thechalakas.com)

