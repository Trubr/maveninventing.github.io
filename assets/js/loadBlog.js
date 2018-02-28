export default () => {
    return import('./blog' /* webpackChunkName: 'blog' */).then(_ => {
        console.log('read and learn are loaded')
    }).catch(error => 'An error occurred while loading the component')
}
