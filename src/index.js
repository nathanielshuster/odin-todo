const requireStyles = require.context('./styles', true, /\.css$/);
requireStyles.keys().forEach(requireStyles);

import { Initialize } from "./initialize";

Initialize.dashboard()