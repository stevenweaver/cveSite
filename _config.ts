import lume from "lume/mod.ts";
import terser from "lume/plugins/terser.ts";
import base_path from "lume/plugins/base_path.ts";
import windi from "lume/plugins/windi_css.ts";

const site = lume();

site.use(windi( { cssFile: 'css/styles.windi.css' }));
site.use(terser());
site.use(base_path());

export default site;
