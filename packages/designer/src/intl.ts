import i18next from "i18next";
import { getCurrentLanguage } from "@xybot/i18n";
import enUS from "./en_us.json";
import zhCN from "./zh_cn.json";

i18next.init({
  lng: getCurrentLanguage(),
  resources: {
    "en-US": {
      translation: enUS,
    },
    "zh-CN": {
      translation: zhCN,
    },
  },
});
