// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const path = require('path');
const pick = require('lodash.pick');

module.exports = function (api, options) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })

  api.beforeBuild(({ config, store }) => {

    // Generate an index file for Fuse to search Posts
    const { collection } = store.getContentType('Blog');

    const Blog = collection.data.map(post => {
      return pick(post, ['title', 'path', 'description']);
    });

    const output = {
      dir: './static',
      name: 'search-blog.json',
      ...options.output
    }

    const outputPath = path.resolve(process.cwd(), output.dir)
    const outputPathExists = fs.existsSync(outputPath)
    const fileName = output.name.endsWith('.json')
      ? output.name
      : `${output.name}.json`

    if (outputPathExists) {
      fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(Blog))
    } else {
      fs.mkdirSync(outputPath)
      fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(Blog))
    }
  })
}
