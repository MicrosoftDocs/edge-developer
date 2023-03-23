const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');
const marked = require('marked');

function getFilesFromGlob(pattern) {
  return new Promise(resolve => {
    glob(pattern, {}, (err, files) => {
      if (err) {
        throw err;
      }

      resolve(files);
    });
  });
}

async function getAllImages() {
  const images = await getFilesFromGlob('../microsoft-edge/**/*.@(png|jpg|gif|jpeg|webp)');
  console.log(`Found ${images.length} images.`);
  // Make all image paths absolute.
  return images.map(image => path.resolve(image));
}

async function getListOfUsedImages() {
  const articles = await getFilesFromGlob('../microsoft-edge/**/*.md');

  let allUsedImages = new Set();
  let allUsedImagesPerArticle = new Map();

  for (const article of articles) {
    const images = extractJustAbsoluteImages(await getArticleContent(article), article);
    allUsedImages = new Set([...allUsedImages, ...images]);
    allUsedImagesPerArticle.set(path.resolve(article), images);
  }

  console.log(`Found ${allUsedImages.size} images used in the articles.`);
  return { usedImages: [...allUsedImages], usedImagesPerArticle: allUsedImagesPerArticle };
}

function extractJustAbsoluteImages(content, articlePath) {
  const images = new Set();

  // Parse the markdown content and replace all image paths with absolute paths.
  const walkTokens = (token) => {
    if (token.type === 'image') {
      images.add(path.resolve(path.dirname(articlePath), token.href));
    }
  };

  marked.use({ walkTokens });
  marked.parse(content);

  return [...images];
}

async function getArticleContent(file) {
  return await fs.readFile(path.resolve(file), { encoding: 'utf8' });
}

async function main() {
  const toDelete = new Set();

  // List all images in ../microsoft-edge and its subfolders, as absolute paths.
  console.log('Getting all images...');
  const allImages = await getAllImages();

  // Get all of the image references in the entire markdown source code (as absolute paths).
  console.log('Getting the content of all articles...');
  const { usedImages, usedImagesPerArticle } = await getListOfUsedImages();

  // console.log('--- first few images');
  // console.log(allImages.slice(0, 10));
  // console.log('--- first few used images');
  // console.log(usedImages.slice(0, 10));

  // Now we only need to check if images are found in the content.
  for (const image of allImages) {
    if (!usedImages.includes(image)) {
      toDelete.add(image);
    }
  }

  console.log(`Found ${[...toDelete].length} unused images.`);
  
  // Delete all unused images.
  for (const image of toDelete) {
    console.log(`Deleting ${image}...`);
    await fs.unlink(image);
  }

  // // See whether we can easily remove the `.msft` suffix part without overriding other images.
  // let okToRemoveSuffix = [];
  // for (const usedImage of usedImages) {
  //   if (usedImage.includes('.msft')) {
  //     const withoutSuffix = usedImage.replace('.msft', '');
  //     if (usedImages.includes(withoutSuffix)) {
  //       console.log(`Can't remove msft suffix from ${usedImage} since ${withoutSuffix} already exists.`);
  //     } else {
  //       okToRemoveSuffix.push(usedImage);
  //     }
  //   }
  // }
  // console.log(`Found ${okToRemoveSuffix.length} msft suffixed images that can be renamed without any problem.`);
  // console.log('--- first few suffixed images');
  // console.log(okToRemoveSuffix.slice(0, 10));

  // // Check how many images are in a root-level media folder vs. close to their md files.
  // let howManyToMove = 0;
  // for (const [articlePath, images] of usedImagesPerArticle) {
  //   const articleDir = path.dirname(articlePath);
  //   for (const image of images) {
  //     let parent = path.dirname(image);
      
  //     while (true) {
  //       if (parent === articleDir) {
  //         // console.log(`✔️  NEXT TO ARTICLE: ${image} --> ${articlePath}`);
  //         break;
  //       } else if (parent === 'C:\\') {
  //         // console.log(`❌  NOT NEXT TO ARTICLE: ${image} --> ${articlePath}`);
  //         howManyToMove++;
  //         break;
  //       }

  //       parent = path.dirname(parent);
  //     }
  //   }
  // }

  // console.log(`Found ${howManyToMove} images that need to be moved.`);
}

main();
