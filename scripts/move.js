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

// Find images that are not close to the markdown file they're included in.
// And move them there.
// If images are used in multiple places, then duplicate them.
// As a first step though, let's only move the images that are not used in multiple places.
// So our first step is to find all of the images in markdown files that only appear in one
// unique md file, and that are not close to that md file. Typically that means they're in a
// general `media` folder (often using ../media/... paths).
// Images that are in the right place have paths like this ./articlename-images/imagename.png

async function main() {
  const { remark } = await import('remark');

  // First we'll do an audit of all images in markdown files.
  // Loop over all md files.
  const files = await getAllSourceFiles('../microsoft-edge/**/*.md');

  // We'll put all of the images in an object.
  // The keys will be the image absolute paths, and the values
  // will be a list of md files that use that image.
  const allImages = {};

  // For each md file, find all images in it.
  for (const file of files) {
    const content = await readFile(file);

    // Find image tags within the md.
    // FIXME: need to skip images in comments, and also match image tags that are immediately followed by a closing parenthesis.
    // const images = content.match(/!\[.*\]\(.*\.png\)/g) || [];
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

      // Add the image to the allImages object.
      if (!allImages[absoluteImagePath]) {
        allImages[absoluteImagePath] = {
          files: new Set(),
          imageNode
        };
      }
      allImages[absoluteImagePath].files.add(file);
    }
  }

  // Get a filtered list of all images that are used in only one md file.
  // For single-use images, it's easier to know what to do. We can just move
  // the image to the right place without worrying about breaking another article.
  // There's more than 2000 images in this case, it's 99% of the cases we have.
  // The rest can be done manually.
  const singleUseImages = Object.entries(allImages).filter(([image, files]) => files.files.size === 1);

  // for (const [absoluteImagePath, {files, imageNode}] of singleUseImages) {
  //   const mdFilePath = files.values().next().value;
  //   const change = createCorrectImagePath(absoluteImagePath, imageNode.url, mdFilePath);
  //   if (!change) {
  //     // console.log(`No change needed for ${imageNode.url}, it's in the right place for ${mdFilePath}`);
  //     continue;
  //   } else {
  //     // console.log(`Need to move ${imageNode.url} to ${change.absolute}`);
  //     // continue;
  //   }

  //   // We have a change to make.
  //   // console.log(change);
  //   // Check if the new paths doesn't already exist.
  //   try {
  //     await fs.access(change.absolute);
  //     console.error(`!!!!!!!!! File already exists at ${change.absolute}`);
  //     console.log("This shouldn't happen and is probably a bug. Cancel all changes and fix this manually first.");
  //     return;
  //   } catch (e) {
  //     // File doesn't exist, we can move it.
  //     await fs.mkdir(path.dirname(change.absolute), { recursive: true });
  //     await fs.rename(absoluteImagePath, change.absolute);
  //     console.log(`Moved ${imageNode.url} to ${change.absolute}`);

  //     // Also update the markdown file.
  //     const mdContent = await readFile(mdFilePath);
  //     const newMdContent = mdContent.replaceAll(imageNode.url, change.relative);
  //     await fs.writeFile(mdFilePath, newMdContent);
  //   }
  // }

  // We've only taken care of the single use images so far.
  // Now we also need to figure out what to do for images that are
  // used in multiple articles.
  // The guideline we want to apply is: images should not be used in multiple articles.
  // So we need to duplicate the images and move them to the right places.
  // The only exception is the microsoft-edge/media/cc-logo/88x31.png logo
  const multipleUseImages = Object.entries(allImages).filter(([image, files]) => files.files.size > 1);
  for (const [absoluteImagePath, { files, imageNode }] of multipleUseImages) {
    if (absoluteImagePath.endsWith('88x31.png')) {
      // This is the microsoft-edge/media/cc-logo/88x31.png logo, we don't want to move it.
      continue;
    }

    for (const mdFilePath of files) {
      const change = createCorrectImagePath(absoluteImagePath, imageNode.url, mdFilePath);
      if (!change) {
        console.log(`No change needed for ${imageNode.url}, it's in the right place for ${mdFilePath}`);
        continue;
      }

      // We have a change to make.
      console.log("change needed", change);
      // Check if the new paths doesn't already exist.
      try {
        await fs.access(change.absolute);
        console.error(`!!!!!!!!! File already exists at ${change.absolute}`);
        console.log("This shouldn't happen and is probably a bug. Cancel all changes and fix this manually first.");
        return;
      } catch (e) {
        // File doesn't exist, we need to copy it there.
        await fs.mkdir(path.dirname(change.absolute), { recursive: true });
        await fs.copyFile(absoluteImagePath, change.absolute);
        console.log(`Moved ${imageNode.url} to ${change.absolute}`);

        // Also update the markdown file.
        const mdContent = await readFile(mdFilePath);
        const newMdContent = mdContent.replaceAll(imageNode.url, change.relative);
        await fs.writeFile(mdFilePath, newMdContent);

        // No need to delete the old image. It might still be used in other articles, so
        // we still need to copy it from there. And the unused image script will run at 
        // some point.
      }
    }
  }
}

function createCorrectImagePath(absoluteImagePath, relativeImagePath, mdFilePath) {
  const absoluteMdPath = path.resolve(mdFilePath);
  const absoluteMdPathNoExtension = absoluteMdPath.replace(/\.md$/, '');
  const absoluteImageDirPath = path.dirname(absoluteImagePath);

  const diff = absoluteImageDirPath.replace(absoluteMdPathNoExtension, '');
  if (diff === "-images") {
    // No need to do anything, this image is in the right place.
    return null;
  }

  // Now we have to figure out what the correct path is.
  // The absolute dir where the image should be:
  const correctAbsoluteImageDirPath = absoluteMdPathNoExtension + '-images';
  const imageName = path.basename(absoluteImagePath);
  const dirName = path.basename(correctAbsoluteImageDirPath);
  const correctAbsolutePath = path.join(correctAbsoluteImageDirPath, imageName);

  return { relative: `./${dirName}/${imageName}`, absolute: correctAbsolutePath };
}

main();
