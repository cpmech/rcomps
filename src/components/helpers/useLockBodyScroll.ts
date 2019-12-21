import { useLayoutEffect } from 'react';

// references:
//  https://github.com/davidtheclark/no-scroll
//  https://usehooks.com/useLockBodyScroll/

class ScrollBehaviour {
  private scrollbarSize: number;
  private scrollTop: number;

  constructor(private isOn = false) {
    const doc = document.documentElement;
    const dummyScroller = document.createElement('div');
    dummyScroller.setAttribute(
      'style',
      'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;',
    );
    doc.appendChild(dummyScroller);
    this.scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
    doc.removeChild(dummyScroller);
    this.scrollTop = window.pageYOffset;
  }

  hasScrollbar() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }

  on() {
    if (this.isOn) {
      return;
    }
    const doc = document.documentElement;
    this.scrollTop = window.pageYOffset;
    if (this.hasScrollbar()) {
      doc.style.width = 'calc(100% - ' + this.scrollbarSize + 'px)';
    } else {
      doc.style.width = '100%';
    }
    doc.style.position = 'fixed';
    doc.style.top = -this.scrollTop + 'px';
    doc.style.overflow = 'hidden';
    this.isOn = true;
  }

  off() {
    if (!this.isOn) {
      return;
    }
    const doc = document.documentElement;
    doc.style.width = '';
    doc.style.position = '';
    doc.style.top = '';
    doc.style.overflow = '';
    window.scroll(0, this.scrollTop);
    this.isOn = false;
  }
}

const scrollBehaviour = new ScrollBehaviour();

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    scrollBehaviour.on();
    const originalStyle = window.getComputedStyle(document.body).overflow;
    return () => {
      scrollBehaviour.off();
      document.body.style.overflow = originalStyle;
    };
  }, []);
};
