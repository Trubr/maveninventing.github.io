import { all, forEach} from './utils/helpers'

import * as basicScroll from 'basicscroll'

export default _ =>{

    const titles = all('.section-header h1')

    forEach(titles, title =>{

        const scrollBasic = basicScroll.create({
            
            elem: title,
            from: 'top-bottom',
            to: 'top-top',
            props: {
                '--tx': {
                    from: '50px',
                    to: '0',
                    direct: true
                },
                '--o': {
                    from: 0,
                    to:  1,
                    direct: true
                }
            }
        })

        scrollBasic.start()

    })

}