### Home task – JavaScript development tools

Create a new repository for your project on https://git.epam.com/ or https://github.com/ with
separate directories for FE and BE parts

*BE application setup*
1. Add index.ts file that just output “Hello, World!” into console and a test file with one dummy
Jest test
2. Setup the following scripts for BE package:
* build -> compile TypeScript
* start -> run index.ts and watch it for changes (use tsc –w + nodemon)
* lint -> run ESLint + Prettier check
* test -> run the dummy test
3. Setup pre-commit hook to run lint and test scripts

*FE application setup*
4. Add index.ts file that just output “Hello, World!” to the document body, index.scss with
some styling and a test file with one dummy Jest test
5. Add needed loaders for your files
6. Setup HtmlWebpackPlugin
7. Setup Development configuration
8. Setup Production configuration
9. Setup the following scripts for FE package:
a. build -> prepare production build
b. start -> run dev server
c. lint -> run ESLint + Prettier check
d. test -> run the dummy test
10. Setup pre-commit hook to run lint and test scripts

Evaluation criteria | 
------------|-------------
0 | Nothing done
1 | The repository and dummy files for BE and FE applications created
2 | Tasks 1-3 (BE configuration setup) are fully implemented
3 | All tasks 1-7 (BE configuration setup + FE Development setup) are fully implemented
4 | All tasks 1-8 (BE configuration setup + FE Development and Production setup) are fully implemented
5 | All tasks 1-10 are fully implemented
