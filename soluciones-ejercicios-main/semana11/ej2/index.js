const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

async function main() {
  const rutaBruto = process.argv[2];

  if (!rutaBruto) {
    console.log("Uso: node index.js ruta-a-la-imagen.jpg");

    process.exit(1);
  }

  try {
    const rutaImg = path.resolve(rutaBruto);

    const { dir, ext, name } = path.parse(rutaImg);

    const validFormats = [".jpg", ".jpeg", ".png", ".gif"];

    if (!validFormats.includes(ext)) {
      throw new Error("Formato de archivo incorrecto");
    }

    const samplesDir = path.join(dir, "samples");

    const exists = await checkExists(samplesDir);

    if (!exists) {
      await fs.mkdir(samplesDir);
    }

    //Miniatura 200px
    const mini = await sharp(rutaImg).resize({ width: 200 });
    mini.toFile(path.join(samplesDir, name + "-mini" + ext));

    //mediana 500px
    const medium = await sharp(rutaImg).resize({ width: 500 });
    medium.toFile(path.join(samplesDir, name + "-mediana" + ext));

    const bw = await medium.greyscale();
    bw.toFile(path.join(samplesDir, name + "-bw" + ext));
  } catch (e) {
    console.log(e.message);
  }
}

main();

async function checkExists(path) {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
}
