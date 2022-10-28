import * as fs from "fs";

/**
 * Saves the given file in the static assets folder and returns the file path.
 * @param file The image filedata that should be saved as a static asset.
 * @param path The path where the static asset should be saved.
 */
export function setRemoteFileAsStatic(file: any, path: string): string {
    fs.writeFileSync(path, file);

    // TODO: Handle setting the path here? :thinking:
    return path;
}