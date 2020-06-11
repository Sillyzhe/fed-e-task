// 实现这个项目的构建任务
const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp')

const del = require('del')

const browserSync = require('browser-sync')

// cwd返回当前命令行的工作目录
const cwd = process.cwd()
let config = {
    // default config
    build: {
        src: 'src',
        dist: 'dist',
        temp: 'temp',
        public: 'public',
        paths: {
            styles: 'src/assets/styles/*.scss',
            scripts: 'src/assets/scripts/*.js',
            // pages: ['*.html', 'layouts/*.html', 'partials/*.html'],
            pages: 'src/*.html',
            images: 'src/assets/images/**',
            fonts: 'src/assets/fonts/**'
        }
    },
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
    }
}

// try {
//     const loadConfig = require(`${cwd}/pages.config.js`)
//     config = Object.assign({}, assign, loadConfig)
// } catch (e) {}

const loadPlugin = require('gulp-load-plugins')

const plugins = loadPlugin()


const bs = browserSync.create()


// 删除编译文件 del
const clean = () => {
    return del([config.build.dist, config.build.temp])
}

// gulp-sass
const style = () => {
    return src(config.build.paths.styles, {
            base: config.build.src,

        })
        .pipe(plugins.sass({
            outputStyle: "expanded"
        }))
        .pipe(dest(config.build.temp))
        .pipe(bs.reload({
            stream: true
        }))
}

//  @babel/core @babel/preset-env gulp-babel
const script = () => {
    return src(config.build.paths.scripts, {
            base: config.build.src,

        })
        .pipe(plugins.babel({
            presets: [require('@babel/preset-env')]
        }))
        .pipe(dest(config.build.temp))
        .pipe(bs.reload({
            stream: true
        }))
}

// gulp-swig

const page = () => {
    return src(config.build.paths.pages, {
            base: config.build.src,

        })
        .pipe(plugins.swig({
            data: config.data
        }))
        .pipe(dest(config.build.temp))
        .pipe(bs.reload({
            stream: true
        }))
}


// gulp-imagemin
const image = () => {
    return src(config.build.paths.images, {
            base: config.build.src,

        })
        .pipe(plugins.imagemin())
        .pipe(dest(config.build.dist))
}

const font = () => {
    return src(config.build.paths.fonts, {
            base: config.build.src,

        })
        .pipe(plugins.imagemin())
        .pipe(dest(config.build.dist))
}

const extra = () => {
    return src('public/**', {
        base: config.build.public
    }).pipe(dest(config.build.dist))
}

const serve = () => {

    watch(config.build.paths.styles, style)
    watch(config.build.paths.scripts, script)
    watch(config.build.paths.pages, page)

    // TODO:bug 

    watch([config.build.paths.images,
        config.build.paths.fonts,
        config.build.public
    ], bs.reload)


    watch('**', bs.reload)

    bs.init({
        port: 2080,
        notify: false,
        // open:false,
        // files: 'dist/**',
        server: {
            baseDir: [config.build.temp, config.build.src, config.build.public],
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    })
}


// gulp-useref gulp-if gulp-uglify gulp-clean-css gulp-htmlmin
const useref = () => {
    return src('temp/*.html', {
            base: config.build.temp,

        })
        .pipe(plugins.useref({
            searchPath: [config.build.temp, '.']
        }))
        // html js css
        .pipe(plugins.if(/\.js$/, plugins.uglify()))
        .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
        .pipe(plugins.if(/\.html$/, plugins.htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        })))
        // .pipe(dest('release'))
        .pipe(dest(config.build.dist))
}


const compile = parallel(style, script, page)

const build = series(clean, parallel(series(compile, useref), image, font,
    extra))
// const build = series(clean, parallel(series(compile, useref), font, image, extra))

const develop = series(compile, serve)

module.exports = {
    compile,
    clean,
    develop,
    build
}