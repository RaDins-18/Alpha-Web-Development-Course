## How to setup Tailwind CSS

Step 1: Run the following commands in CLI
```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line
```
content: ["*.html"],
```

Step 3: Create src/input.css file and add below lines in file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Link the src/output.css file in html file

Step 5: Run this command to create src/ouput.css
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
