// sass 


module.exports = grunt => {
  const sass = require('sass')
  const loadGruntTasks = require('load-grunt-tasks')
  grunt.initConfig({
    meta: {
      srcPath: 'src'
    },
    swigtemplates: {
      dev: {
        data: {
          menus: [{
              name: 'Home',
              icon: 'aperture',
              link: 'index.html'
            },
            {
              name: 'Features',
              link: 'features.html'
            },
            {
              name: 'About',
              link: 'about.html'
            },
            {
              name: 'Contact',
              link: '#',
              children: [{
                  name: 'Twitter',
                  link: 'https://twitter.com/w_zce'
                },
                {
                  name: 'About',
                  link: 'https://weibo.com/zceme'
                },
                {
                  name: 'divider'
                },
                {
                  name: 'About',
                  link: 'https://github.com/zce'
                }
              ]
            }
          ],
          pkg: require('./package.json'),
          date: new Date()
        },
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'dist/',
      }
    },
    sass: {
      options: {
        sourceMap: false,
        implementation: sass,
        style: 'compressed'
      },
      main: {
        files: {
          'dist/assets/styles/main.css': 'src/assets/styles/main.scss',
        }
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          'dist/assets/scripts/main.js': 'src/assets/scripts/main.js'
        }
      }
    },
    uglify: {
      build: {
        src: 'dist/assets/scripts/main.js',
        dest: 'dist/assets/scripts/main.min.js'
      }
    },
    cssmin: {
      css: {
        src: 'dist/assets/styles/main.css',
        dest: 'dist/assets/styles/main.min.css'
      }

    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/images/',
          src: ['*.{png,jpg,jpeg,gif,svg}'],
          dest: 'dist/assets/images/'
        }]
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src/assets/fonts', //根目录
          dest: 'dist/assets/fonts',
          src: '*.*' //基于cwd的子目录
        },
        {
          expand: true,
          cwd: 'public', //根目录
          dest: 'dist',
          src: '*.ico' //基于cwd的子目录
        }]
      }
    },
    useref: {
      html: 'dist/**/*.html',
      temp: 'node_modules/'
    },
    watch: {
      js: {
        files: ['src/assets/scripts/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['src/assets/styles/*.scss'],
        tasks: ['sass']
      }
    }
  })
  loadGruntTasks(grunt)

  grunt.registerTask('default', ['sass', 'babel', 'copy','swigtemplates', 'uglify', 'cssmin', 'imagemin'])
}
