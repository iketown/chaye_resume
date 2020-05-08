import rehypeReact from 'rehype-react';
import ModalLink from './ModalLink';
import { createElement } from 'react';

const renderAst = new rehypeReact({
  createElement,
  components: {
    'modal-link': ModalLink,
  },
}).Compiler;

export default renderAst;
