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
  // First, recursively find all folders that are empty.
  // We'll use this to find all the folders that we can delete.
  const emptyFolders = await getAllSourceFiles('../microsoft-edge/**/*/', []);
  for (const folder of emptyFolders) {
    // Check if folder is empty.
    const files = await fs.readdir(folder);
    if (files.length === 0) {
      // Delete folder.
      await fs.rmdir(folder);
    }
  }

  // Do an audit of all images in markdown files.
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
    const images = content.match(/!\[.*\]\(.*\.png\)/g) || [];

    // For each image tag, get the absolute image path.
    for (const image of images) {
      // Extract the image path from the markdown image tag.
      const imagePath = image.match(/!\[.*\]\((.*)\)/)[1];
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
          imagePath: imagePath
        };
      }
      allImages[absoluteImagePath].files.add(file);
    }
  }

  // We now need to figure out what to do for images that are used in multiple articles.
  // While some of them might make sense to duplicate, others are icons that
  // we do want to keep in one single place.
  const multipleUseImages = Object.entries(allImages).filter(([image, files]) => files.files.size > 1);
  console.log(`${multipleUseImages.length} images are used in multiple articles.`);

  for (const [absoluteImagePath, {files, imagePath}] of multipleUseImages) {
    if (absoluteImagePath.includes('icon')) {
      // Leave the icon images alone. They're 99% devtools icons stuff that we do want to share
      // console.log(`**ICON** Image ${image} is used in ${files.files.size} articles.`);
      continue;
    }

    if (absoluteImagePath.includes('cc-logo') && absoluteImagePath.includes('88x31.png')) {
      // This is the cc license logo. Leave it alone.
      continue;
    }

    if (absoluteImagePath.includes('experimental-tag.png')) {
      // This is the experimental image. Leave it alone.
      continue;
    }

    console.log(`Image ${absoluteImagePath} is used in ${files.size} articles. Duplicating the image`);

    for (const mdSourceFile of files) {
        const change = createCorrectImagePath(absoluteImagePath, imagePath, mdSourceFile);
        if (!change) {
          // console.log(`No change needed for ${imagePath}, it's in the right place for ${mdSourceFile}`);
          continue;
        }

        // We have a change to make.
        console.log(change);
        // Check if the new paths doesn't already exist.
        try {
          await fs.access(change.absolute);
          console.error(`!!!!!!!!! File already exists at ${change.absolute}`);
          console.log("Cancel all changes and fix this manually first");
          return;
        } catch (e) {
          // File doesn't exist, we can copy it there.
          console.log(`Copying ${imagePath} to ${change.absolute}`);
          await fs.mkdir(path.dirname(change.absolute), { recursive: true });
          await fs.copyFile(absoluteImagePath, change.absolute);
          // Also update the markdown file.
          const mdContent = await readFile(mdSourceFile);
          const newMdContent = mdContent.replace(imagePath, change.relative);
          await fs.writeFile(mdSourceFile, newMdContent);
        }
    }

    // We can now delete the original image.
    await fs.unlink(absoluteImagePath);
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
