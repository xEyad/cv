# SimpleCv

simple online cv that shows my portfolio and contact data

# Development

you need to use node v16.14 or v14.20.1
you can use nvm-windows to install it
then npm i

# Deployment

ng build --output-path docs --base-href /cv/
When the build is complete, make a copy of docs/index.html and name it docs/404.html.
link will be https://xeyad.github.io/cv/

Source: https://angular.io/guide/deployment#deploy-to-github-pages

troubleshooting:
if ng serve or building is not working.
https://bobbyhadz.com/blog/react-error-digital-envelope-routines-unsupported
