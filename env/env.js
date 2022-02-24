const dotenv = require("dotenv");
const { resolve } = require("path");
const { existsSync } = require("fs");

const ROMAN_APP = /^ROMAN_APP/i;
const mode = process.env.NODE_ENV || "development";

const envPath = resolve(__dirname, ".env");
const pathList = [
  `${envPath}.${mode}.local`,
  `${envPath}.${mode}`,
  `${envPath}.local`,
  `${envPath}`,
];

pathList.forEach((path) => {
  if (existsSync(path)) {
    dotenv.config({ path });
  }
});

const raw = Object.keys(process.env)
  // 遍历只符合正则表达式的环境变量
  .filter((key) => ROMAN_APP.test(key))
  .reduce(
    (prev, key) => {
      prev[key] = process.env[key];
      return prev;
    },
    {
      // 一般都有个NODE_ENV环境变量
      NODE_ENV: mode,
    }
  );

const stringifiedEnv = JSON.stringify(raw);

module.exports = {
  raw,
  stringifiedEnv,
};
