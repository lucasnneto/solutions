//AUTO IMPORT FOR ALL VUE FILES IN FOLDER - AND CREATE VUE COMPONENTE

const ComponentContext = require.context("./", false, /\.vue$/i, "lazy");
//const ComponentContext = require.context("./", true, /\.vue$/i, "lazy"); --- second params: include subdirectories
ComponentContext.keys().forEach((componentFilePath) => {
  console.log(componentFilePath);
  const componentName = componentFilePath.split("/").pop()?.split(".")[0]!;
  vue.component(componentName, () => import(componentFilePath));
});
