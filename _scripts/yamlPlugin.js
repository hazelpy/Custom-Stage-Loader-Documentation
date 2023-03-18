// Install a different YAML front matter parser
$docsify.plugins = [].concat(function (hook, vm) {
  // Used to remove front matter from embedded pages if installed.
  vm.config.frontMatter = {};
  vm.config.frontMatter.installed = true;
  vm.config.frontMatter.parseMarkdown = function (content) {
    const { __content, ...attributes } = yamlFront.safeLoadFront(content);
    return __content;
  };

  hook.beforeEach(content => {
    const { __content, ...attributes } = yamlFront.safeLoadFront(content);

    vm.frontmatter = attributes;

    return __content;
  });
}, $docsify.plugins);