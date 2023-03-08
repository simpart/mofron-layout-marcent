/**
 * @file mofron-layout-marcent/index.js
 * @brief margin-center layout module for mofron
 * @license MIT
 */
const Margin    = require('mofron-layout-margin');
const HrzCenter = require('mofron-layout-hrzcenter');

module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     * 
     * @param (mixed) 
     *                key-value: layout config
     * @short
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname('Marcent');
	    this.shortForm('top','rate');

	    /* init config */
            this.confmng().add('top',  { type: 'size', init:'0.2rem' });
            this.confmng().add('rate', { type: 'number', init:80 });
            
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    component (prm) {
        try {
            if (undefined !== prm) {
                prm.layout([
                    new Margin('top', this.top()),
                    new HrzCenter(this.rate())
                ]);
            }
            return super.component(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     * 
     * @param (number) target child index
     * @param (component) target component object
     * @type private
     */
    contents (idx, cmp) {}

    top (prm) {
        try {
            return this.confmng('top', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    rate (prm) {
        try {
            return this.confmng('rate', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
