function flattenVNodes(vnodes) {
    const result = [];
    function traverse(vnodes) {
        vnodes.forEach((vnode) => {
            result.push(vnode);

            if (vnode.componentInstance) {
                traverse(vnode.componentInstance.$children.map((item) => item.$vnode));
            }

            if (vnode.children) {
                traverse(vnode.children);
            }
        });
    }

    traverse(vnodes);
    return result;
}
// 按vnode顺序对子实例排序
export function sortChildren(children, parent) {
    const { componentOptions } = parent.$vnode;
    if (!componentOptions || !componentOptions.children) {
        return;
    }
    const vnodes = flattenVNodes(componentOptions.children);
    children.sort((a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode));
}
//由一个组件，向下找到所有指定的组件
export function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}