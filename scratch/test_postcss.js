const fs=require('fs');
const postcss=require('postcss'); const tailwind = require('@tailwindcss/postcss')();
postcss([tailwind]).process(fs.readFileSync('src/index.css','utf8')).then(r=>{console.log(JSON.stringify(r.root.nodes.map(n=>n.toString()),null,2));});