

# Az204

This project was generated using [Nx](https://nx.dev).

Thigns to do 
[X] Define a problem
[ ] Create Frontend websites
[ ] Create a VM that Reads a list of cities
[ ] Create an App Service that runs the api
[ ] Build an ARM template that does something
[ ] Build a container that serves another api
[ ] Build a function that does something 
[ ] Build a durable function that does something



Things to understand more
[ ] Fault tolerance in Azure - ScaleSets vs Multi Region Backups
[ ] Function.json - make a few azure functions locally to see what we're 
[ ] Run up and tear down a few vms
[ ] Learn how to bootstrap a vm with user data equivilants
[ ] Learn the codewords behind AppService plans
[ ] Custom Handlers in functions - what are they?


# Problem

We are building a weather site.
* We have website frontend that calls a vm to get the list of cities monitored ( VM )
* Have a ARM template that will defined an VM in an VNet
* Call an App-Service temperature-Api to get the temperature in that city
* Call a container endpoint to get the wind conditions in that city
* Call a function to get the tides in that city
* Call a durable function to trigger the download of meta-data for a city

