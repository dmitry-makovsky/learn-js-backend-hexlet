import {
    table,
    tr,
    td
} from './buildHtmlTags';

export default () => table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions'))
);