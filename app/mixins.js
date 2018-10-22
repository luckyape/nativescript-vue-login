import * as pages from './pages'

let keys = Object.keys(pages) // page component names
const props =  ['someVal', 'reset'] 
export default {
    props,
    methods: { 
        goTo(page, settings) {
            let target = typeof page === 'string' ? pages[page] : page
            let someVal = this.someVal || ''
            /* 
                values passed here will be maintained across frames with
            */
            if(typeof target === 'object') {
                let options = this.getOptions(settings)               
                this.$navigateTo(target, options)   
            }           
        },
        goBack(page) {
            let options = this.getOptions(settings)               
            this.$navigateBack(options,  null)
        },
        resetGo() {                
             this.goTo('App', {clearHistory: true})
        },
        getProps() {
            let optProps = {}
            for (let i = 0; i < props.length; i++) {
                let prop = props[i] 
                optProps[prop] = this[prop] || null
            } 
            return optProps
        }, 
        getOptions(settings) {
            let options = {}
            let props = this.getProps()
            if(settings) {
                if(settings.props) {
                    Object.assign(props, settings.props)    
                }
                Object.assign(options, settings, {props})
            } else {
                Object.assign(options, {props})
            }            
            return options
        },
        goNext() {
            this.goTo(this.next) // next can be a locally imported component or part of the pages set
        },
        goToChildA() {
            let target = pages['ChildA']
            this.goTo(target)
        } 
    },
    computed: {
        colors: ({$store}) => $store.state.colors
    }
}