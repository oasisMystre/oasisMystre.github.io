import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

async function compress() {
	console.log("Compressing assets in public/...");

	// 1. Optimize me.jpeg
	const meJpegPath = path.join(publicDir, "me.jpeg");
	if (fs.existsSync(meJpegPath)) {
		const originalSize = fs.statSync(meJpegPath).size;
		const optimizedJpeg = await sharp(meJpegPath)
			.jpeg({ quality: 80, progressive: true, mozjpeg: true })
			.toBuffer();
		fs.writeFileSync(meJpegPath, optimizedJpeg);
		console.log(
			`me.jpeg: ${(originalSize / 1024).toFixed(1)} KB -> ${(optimizedJpeg.length / 1024).toFixed(1)} KB`,
		);

		// Also generate me.webp for modern browsers / next-gen delivery
		const meWebp = await sharp(optimizedJpeg)
			.webp({ quality: 80, effort: 6 })
			.toBuffer();
		fs.writeFileSync(path.join(publicDir, "me.webp"), meWebp);
		console.log(`me.webp generated: ${(meWebp.length / 1024).toFixed(1)} KB`);
	}

	// 2. Optimize PNGs with palette quantization
	const pngs = [
		"apple-touch-icon.png",
		"favicon-192x192.png",
		"favicon.png",
		"favicon-32x32.png",
	];

	for (const pngName of pngs) {
		const pngPath = path.join(publicDir, pngName);
		if (fs.existsSync(pngPath)) {
			const originalSize = fs.statSync(pngPath).size;
			const optimized = await sharp(pngPath)
				.png({ compressionLevel: 9, palette: true, effort: 10 })
				.toBuffer();
			fs.writeFileSync(pngPath, optimized);
			console.log(
				`${pngName}: ${(originalSize / 1024).toFixed(1)} KB -> ${(optimized.length / 1024).toFixed(1)} KB`,
			);
		}
	}

	// 3. Regenerate favicon.ico from the optimized 32x32 PNG
	const fav32Path = path.join(publicDir, "favicon-32x32.png");
	if (fs.existsSync(fav32Path)) {
		const png = fs.readFileSync(fav32Path);
		const header = Buffer.alloc(22);
		header.writeUInt16LE(0, 0); // reserved
		header.writeUInt16LE(1, 2); // ICO type
		header.writeUInt16LE(1, 4); // 1 image
		header.writeUInt8(32, 6); // width 32
		header.writeUInt8(32, 7); // height 32
		header.writeUInt8(0, 8); // colors
		header.writeUInt8(0, 9); // reserved
		header.writeUInt16LE(1, 10); // planes
		header.writeUInt16LE(32, 12); // bpp
		header.writeUInt32LE(png.length, 14); // image size
		header.writeUInt32LE(22, 18); // offset
		const icoBuf = Buffer.concat([header, png]);
		fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);
		console.log(
			`favicon.ico regenerated: ${(icoBuf.length / 1024).toFixed(1)} KB`,
		);
	}

	console.log("All assets compressed successfully!");
}

compress().catch((err) => {
	console.error(err);
	process.exit(1);
});
