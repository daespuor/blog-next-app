const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextEnv = require("next-env");
const dotEnvLoad = require("dotenv-load");

dotEnvLoad();
/* module.exports = (phase, { defaultConfig }) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    console.log("Im in Dev");
  }
  return defaultConfig;
}; */

const withNextEnv = nextEnv();

module.exports = withNextEnv();
