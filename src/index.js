const requireStyles = require.context('./styles', true, /\.css$/);
requireStyles.keys().forEach(requireStyles);

import { isThisMinute } from "date-fns";
import { DisplayController } from "./displayController";

// if they exist. render them

// if not. render a no project notice.

// create the add project form. 