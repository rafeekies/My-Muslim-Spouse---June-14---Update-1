// This file is now deprecated - using src/firebase.js instead
// Keeping this file to avoid breaking imports, but redirecting to the main firebase.js file

import { auth, db, storage } from '../firebase';

export { auth, db, storage };
export default { auth, db, storage };
