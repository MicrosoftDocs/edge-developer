const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

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
  return await fs.readFile(path.resolve(file), { encoding: 'utf8' });
}

async function main() {
  const { remark } = await import('remark');

  // Find all images that are used in md files.
  const files = await getAllSourceFiles('../microsoft-edge/**/*.md');
  const allImagesInMdFiles = new Set();

  // For each md file, find all images in it.
  for (const file of files) {
    const content = await readFile(file);
    const mdAST = await remark().parse(content);

    // Iterate recursively through the AST's children to find all image tags.
    const images = [];
    function findImages(node) {
      if (node.type === 'image') {
        images.push(node);
      }
      if (node.children) {
        for (const child of node.children) {
          findImages(child);
        }
      }
    }
    findImages(mdAST);

    // For each image tag, get the absolute image path.
    for (const imageNode of images) {
      // Extract the image path from the markdown image tag.
      const imagePath = imageNode.url;
      // Make imagePath absolute. It's relative to the markdown file.
      const absoluteImagePath = path.resolve(path.dirname(path.resolve(file)), imagePath);
      // Check that the image file actually exists.
      try {
        await fs.access(absoluteImagePath);
      } catch (e) {
        // console.error(e);
        continue;
      }

      allImagesInMdFiles.add(absoluteImagePath);
    }
  }

  // List all images in the entire codebase.
  const allImagesInCodebase = await getAllSourceFiles('../microsoft-edge/**/*.png', []);
  // Make the image paths absolute.
  for (let i = 0; i < allImagesInCodebase.length; i++) {
    allImagesInCodebase[i] = path.resolve(allImagesInCodebase[i]);
  }

  // Find all images that are not used in md files.
  const unusedImages = allImagesInCodebase.filter(image => !allImagesInMdFiles.has(image));
  for (const image of unusedImages) {
    console.log(`Deleting ${image}`);
    await fs.unlink(image);
  }
}

main();
