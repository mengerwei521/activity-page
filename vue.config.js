const path = require("path");
const { projectValue } = require("./config/project"); //项目配置
const FileManagerPlugin = require('filemanager-webpack-plugin');//管理打包后的文件路径
/**
 * 
 * @param {__dirname 变量 是以文件所处的路径为值}
 * @returns  连接路径
 */
const resolve = dir => {
  return path.join(__dirname, dir);
};
console.log(projectValue, projectValue.route)
const BASE_URL = "/";
//自动导入公共样式
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/public-style/index.less'),
      ],
    })
};
function getEntry() {
  var entries = {};
  entries[projectValue.route] = {
    index: {
      // page的入口
      entry: "src/views/" + projectValue.route + "/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: projectValue.title,
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  };

  return entries;
}
var pages = getEntry();

module.exports = {
  //部署应用包时的基本 URL
  publicPath: BASE_URL,
  //放置生成的静态资源目录。
  assetsDir: projectValue.route,
  //构建应用
  pages: pages[projectValue.route],
  chainWebpack: config => {
    //自动化导入
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_v", resolve("src/views"))
      .set("_c", resolve("config"));
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      //vue项目发布时去除console语句
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      //初始化 filemanager-webpack-plugin 插件实例
      let FileManagerPlugins = new FileManagerPlugin({
        events: {
          onEnd: {
            mkdir: ['./dist'],
            delete: [
              //首先需要删除项目根目录下的dist
              './dist'
            ],
            archive: [
              //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
              { source: './dist', destination: `./dist/${projectValue.route}.zip` },
            ]
          },
        }
      })
      config.plugins.push(FileManagerPlugins)
    }
    //定位代码
    config.devtool = 'source-map'
  },
  //css配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 换算的基数
          require("postcss-pxtorem")({ rootValue: 37.5, propList: ['*', '!font', '!font-size'] })
        ]
      }
    }
  },
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: false,
  // 生产禁止显示源代码
  productionSourceMap: false,
  //本地代理
  // devServer: {
  //   proxy: {
  //   }
  // },
};
