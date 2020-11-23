import { fileURLToPath } from "url";
import { join, dirname } from "path";

// ES6 module for `__dirname`
// https://nodejs.org/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
