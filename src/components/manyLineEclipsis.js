export default {
    props:['line'],
    template:
    `<p style="overflow : 'hidden';
    text-overflow: 'ellipsis';
    display: '-webkit-box';
    -webkit-line-clamp: line;
    -webkit-box-orient: 'vertical';"><slot></slot></p>`
    ,
}