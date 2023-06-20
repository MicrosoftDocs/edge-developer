const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

// Find markdown image tags like this:
// ![The Inspect tool while hovering over with the first headline of this article](media/devtools-intro-inspect-tool.msft.png)
// Got to have the msft suffix in the image name. Any alt text, any image path.
const MSFT_IMG_REGEX = /!\[.*\]\(.*\.msft\.png\)/g;
// Regex to extract the image path from the markdown image tag.
const IMG_PATH_REGEX = /!\[.*\]\((.*)\)/;

function getAllSourceFiles(include, ignore = []) {
    return new Promise(resolve => {
        glob(include, { ignore }, (err, files) => {
            if (err) {
                throw err;
            }

            resolve(files);
        });
    });
}

async function readFile(file) {
  return await fs.readFile(path.resolve(file), {encoding: 'utf8'});
}

async function main() {
  // There are no images that have both have and don't have the msft suffix.
  // So it's safe to rename the msft suffixed images to not have the suffix.
  // Proof with the code below:
  // const msftImages = await getAllSourceFiles('../microsoft-edge/**/*.msft.png');
  // for (const image of msftImages) {
  //   // Check if there's an image at the same path, but without the msft suffix.
  //   const imageWithoutSuffix = image.replace('.msft.png', '.png');
  //   try {
  //     await fs.access(imageWithoutSuffix);
  //     console.log(`!!!!!!!!!!! ${image} has a non-msft version !!!!!!!!!!!`);
  //   } catch (err) {
  //     console.log(`${image} has no non-msft version`);
  //   }
  // }

  // List all markdown files.
  const files = await getAllSourceFiles('../microsoft-edge/**/*.md');
  for (const file of files) {
    console.log("~~~~~~~~~~~~~~~~");
    console.log("~~~~~~~~~~~~~~~~");
    console.log(`Processing ${file}`);

    // Read the file content.
    const content = await readFile(file);
    let newContent = content;
    
    // Find image tags that have the msft suffix.
    const msftImages = content.match(MSFT_IMG_REGEX);
    
    if (msftImages) {
      for (const image of msftImages) {
        // Extract the image path from the markdown image tag.
        const imagePath = image.match(IMG_PATH_REGEX)[1];
        // Create the new image path which doesn't have the msft suffix.
        const newImagePath = imagePath.replace('.msft.png', '.png');

        // Make imagePath absolute. It's relative to the markdown file.
        const absoluteImagePath = path.resolve(path.dirname(path.resolve(file)), imagePath);
        // And create the new absolute image path.
        const absoluteNewImagePath = path.resolve(path.dirname(path.resolve(file)), newImagePath);

        // Renaming the image file on disk, if necessary.
        // It may have already been renamed.
        console.log(`Renaming ${imagePath} to ${newImagePath}`);
        
        try {
          await fs.rename(absoluteImagePath, absoluteNewImagePath);
        } catch (err) {
          console.error(err);
          console.log(`Could not rename ${absoluteImagePath} to ${absoluteNewImagePath}`);
        }

        // Replace the image path in the markdown file.
        newContent = newContent.replace(imagePath, newImagePath);
      }
    }
   
    await fs.writeFile(file, newContent);
  }
}

main();
