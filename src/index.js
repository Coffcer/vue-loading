import './style.css';

export default {
    params: ['loadingOptions'],
    handleShow () {
        if (window.getComputedStyle(this.el).position === 'static') {
            this.static = true;
            this.el.style.position = 'relative';
        }

        let box = document.createElement('div');
        box.className = 'vue-loading';
        this.el.appendChild(box);

        let msg = document.createElement('div');
        msg.className = 'vue-loading-msg';
        msg.textContent = this.options.text;
        box.appendChild(msg);

        window.requestAnimationFrame(() => {
            box.style.opacity = 1;
        });

        this.loadingBox = box;
    },
    handleHide () {
        this.loadingBox.addEventListener('transitionend', () => {
            this.loadingBox.remove();

            if (this.static) {
                this.el.style.removeProperty('position');
            }
        });

        this.loadingBox.style.opacity = 0;
    },
    bind () {
        // is static
        this.static = false;
        // vue-loading dom
        this.loadingBox = null;
        // is first call update
        this.first = true;
        this.options = {
            text: 'Loading ...'
        };

        if (this.params.loadingOptions) {
            Object.assign(this.options, this.params.loadingOptions);
        }
    },
    update (value) {
        if (value) {
            this.first = false;
            this.handleShow();
        } else {
            if (this.first) {
                this.first = false;
                return;
            }
            this.handleHide();
        }
    }
};