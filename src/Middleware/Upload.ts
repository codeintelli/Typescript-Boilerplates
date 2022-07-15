import { NextFunction } from "express";
import multer from "multer";
import { ErrorHandler } from "../Utils";

// * defined filter
const fileFilter = (next: NextFunction, file: any, cb: any) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/webp' ||
        file.mimetype === 'image/svg+xml' ||
        file.mimetype === 'image/gif' ||
        file.mimetype === 'image/avif' ||
        file.mimetype === 'image/apng' ||
        file.mimetype === 'application/octet-stream'
    ) {
        cb(null, true);
    } else {
        return cb(ErrorHandler.fileFormat('File format should be PNG,JPG,JPEG,WEBP,SVG,XML,GIF,AVIF & APNG')); // if validation failed then generate error
    }
};

// *file upload using validation
const upload = multer({
    dest: "src/uploads/",
    // @ts-ignore
    fileFilter: fileFilter
});

export default upload