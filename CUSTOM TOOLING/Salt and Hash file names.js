const { readdirSync } = require('fs');

const PATH_TO_YOUR_FOLDER = './files';
console.log('Current folder name', PATH_TO_YOUR_FOLDER)

console.log(readdirSync(PATH_TO_YOUR_FOLDER));
// output: array of the file names in my downloads directory

let output = readdirSync(PATH_TO_YOUR_FOLDER)

outmap.each((item) =>{
  
})


function copyFileSync(source, target) {

  var targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}